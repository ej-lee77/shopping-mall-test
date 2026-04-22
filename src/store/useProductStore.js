import { create } from "zustand";
import { productsData } from "../data/productsData";
import { persist } from "zustand/middleware";
import OrderList from "../components/OrderList";

export const useProductStore = create(
    persist((set, get) => ({
        // 상품목록을 저장할 배열
        items: [],

        // 메뉴를 저장할 변수
        menus: [],

        // search 서브페이지내에서의
        searchWord: "",
        onSetSearchWord: (word)=>set({searchWord: word}),

        // 전체 search
        searchWordAll: "",
        onSetSearchWordAll: (word)=>set({searchWordAll: word}),

        // 정렬
        // 정렬의 종류를 체크할 변수
        sortType: "",
        // 정렬의 차순을 저장할 변수 기본오름
        sortOrder: "asc",
        onSetSort: (type, order="asc")=>
            set({sortType: type, sortOrder: order}),

        // 외부데이터 불러오기
        onFetchItems: async () => {
            const data = productsData;
            // const res = await fetch(productsData);
            // console.log("데이터 불러옴", await res.json());
            // const data = res;
            // console.log(data);

            // 메인메뉴
            // new Set([]) : 중복되는데이터 삭제
            const categories = ["all", ...new Set(data.map(item => item.category))];
            // console.log("cate:", categories);

            const menus = categories.map((cate) => {
                if (cate === "all") {
                    return { key: "all", label: "All", sub: [] }
                }

                const subCategories = [
                    ...new Set(data.filter(item => item.category === cate)
                        .map(subitem => subitem.subcategory))
                ];
                // console.log("서브카테:", subCategories);

                return {
                    key: cate,
                    label: cate === "men" ? "남자" :
                        cate === "women" ? "여자" :
                            cate === "jewelery" ? "보석" :
                                cate === "electronics" ? "전자제품" : cate,
                    sub: subCategories.map(sub => ({
                        key: sub,
                        label: sub
                    }))
                }
            });

            console.log(menus);
            set({
                items: data,
                menus
            });
            // try{
            //     const res = await fetch("https://fakestoreapi.com/products");
            //     const data = await res.json();
            //     console.log(data);
            //     set({items: data});
            // }catch(err){
            //     console.log(err.message);
            // }
        },

        // 카테고리별로 상품을 분리해줄 메서드
        onItemsCategory: (cate) => {
            const allItems = get().items;
            if (!cate || cate === "all") {
                return allItems;
            } else {
                return allItems.filter((item) => item.category === cate);
            }
        },

        // 장바구니
        // 장바구니에 담은 데이터 정보를 저장할 변수
        cartItems: [],
        // 카트에 담은 상품 개수
        cartCount: 0,
        // 상품의 전체 가격을 저장할 변수
        totalPrice: 0,

        // 전체 가격 구하기
        onTotal: (cart) => {
            // 배열의 데이터를 누적하여 계산하기
            // 배열명.reduce((누적값, 현재값)=>누적값 + 계산식값, 초기값)
            // cartItem.reduce((acc, cur)=> acc+cur.가격*cur.개수, 0)
            return cart.reduce((acc, cur) => acc + cur.price * cur.count, 0);
        },
        // 상품을 카트에 담기
        onAddCart: (product) => {
            // 장바구니 정보
            const cart = get().cartItems;
            // 같은 제품이 있는지 체크
            // 제품의 id와 사이즈가 일치하면 같은제품
            const existing = cart.find((item) => item.id === product.id && item.size === product.size);

            // 새롭게 담은 상품 바구니에 추가
            let updateCart;

            // 같은 제품이 있는 경우와 없는 경우
            if (existing) {
                updateCart = cart.map((item) =>
                    item.id === product.id && item.size === product.size ? { ...item, count: item.count + (product.count) } : item);
            } else {
                updateCart = [...cart, { ...product }];
            }

            set({
                cartItems: updateCart,
                cartCount: updateCart.length,
                totalPrice: get().onTotal(updateCart)
            });
            // console.log("장바구니", cart);
        },
        // 담은 상품을 제거
        onRemoveCart: (id, size) => {
            const updateCart = get().cartItems.filter(
                (item) => !(item.id === id && item.size === size)
            );
            set({
                cartItems: updateCart,
                cartCount: updateCart.length,
                totalPrice: get().onTotal(updateCart)
            });
        },
        // 개수 조절
        onPlusCount: (id, size) => {
            const updateCart = get().cartItems.map((item) =>
                item.id === id && item.size === size ? { ...item, count: item.count + 1 } : item);
            set({
                cartItems: updateCart,
                totalPrice: get().onTotal(updateCart)
            });
        },
        onMinusCount: (id, size) => {
            const updateCart = get().cartItems.map((item) =>
                item.id === id && item.size === size ? { ...item, count: Math.max(1, item.count - 1) } : item);
            set({
                cartItems: updateCart,
                totalPrice: get().onTotal(updateCart)
            });
        },

        // 쿠폰
        coupons: [
            {
                id: "welcome",
                text: "웰컴 쿠폰 5% 할인",
                type: "percent",
                per: 5
            },
            {
                id: "cart",
                text: "장바구니 10% 할인",
                type: "percent",
                per: 10
            }
        ],
        finalPrice: 0,
        selectedCoupon: null,
        // 선택한 쿠폰 체크
        onSelectedCoupon: (coupon) => {
            set({
                selectedCoupon: coupon
            });
        },
        // 최종가격을 변경
        onFinalPrice: () => {
            const { totalPrice, selectedCoupon } = get();
            let final;
            if (selectedCoupon) {
                final = Math.floor(totalPrice * (1 - selectedCoupon.per / 100));
            } else {
                final = totalPrice;
            }
            set({
                finalPrice: final
            });
        },

        // 찜하기
        wishLists: [],
        onAddWishList: (product) => {
            const wish = get().wishLists;
            const existing = wish.find((w) => w.id === product.id);
            if (existing) {
                return alert("이미 있는 제품입니다");
            }
            set({
                wishLists: [...wish, product]
            });
        },
        onRemoveWish: (id) => {
            const updateWish = get().wishLists.filter((w) => !(id === w.id));
            set({
                wishLists: updateWish
            });
        },

        // 주문
        // 주문 목록을 저장할 변수
        orderLists: [],
        // 결제를 클릭하면 결제 항목이 주문목록에 들어가도록
        onAddOrder: (order)=>{
            const orderPrev = get().orderLists;
            // set({
            //     orderLists: [
            //         ...orderPrev,
            //         {
            //             id: Date.now(),
            //             // new Date jsx에서 사용불가 그래서 문자로 변환
            //             date: new Date().toLocaleString(),
            //             order
            //         }
            //     ] 
            // });
            const newOrder = {
                id: Date.now(),
                date: new Date().toLocaleDateString(),
                items: order.items,
                price: order.total,
                status: "결제완료"
            }
            const updateOrder = [
                ...orderPrev, newOrder
            ]
            set({
                orderLists : updateOrder,
                cartCount: 0,
                selectedCoupon: null,
                cartItems: []
            })
        },
        onCancelOrder: (orderId)=>{
            const prevOrder = get().orderLists;
            const updateOrder = prevOrder.map((order)=>
                order.id === orderId ? {...order, status: "취소신청중"} : order
            );
            set({orderLists: updateOrder});
        }
    }),
    {
        name: "product-storage",
        partialize: (state) => ({
            cartItems: state.cartItems,
            wishLists: state.wishLists,
            cartCount: state.cartCount,
            totalPrice: state.totalPrice,
            orderLists: state.orderLists
        })
    }
));