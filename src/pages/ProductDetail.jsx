import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductStore } from '../store/useProductStore';
import "./scss/ProductDetail.scss"
import "../components/scss/Popup.scss"
import DetailCartPopup from '../components/DetailCartPopup';
import DetailWishPopup from '../components/DetailWishPopup';

export default function ProductDetail() {
  // 주소줄에 있는 파라메터값을 받아서 사용하기
  const {id} = useParams();//string
  console.log("아이디:", id);

  // 상태변수 상품목록
  const {items, onAddCart, onAddWishList} = useProductStore();

  // 상품을 저장할 변수
  const [product, setProduct] = useState("");

  // 뿌려줄 제품
  useEffect(()=>{
    if(!id || items.length===0)return;
    const findItem = items.find((item)=> item.id === Number(id));
    setProduct(findItem);
    console.log(findItem);
  }, [id, items]);

  // 사이즈
  const sizes = ["S", "M", "L"];
  const [selectSize, setSize] = useState("");

  // 수량
  const [count, setCount] = useState(1);

  // 팝업을 체크할 변수
  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);

  // 장바구니에 추가
  const handleAddToCart = ()=>{
    console.log("장바구니");
    // 사이즈 선택여부
    if(!selectSize){
      alert("사이즈를 선택해주세요");
      return;
    }

    const productCart = {
      ...product,
      size: selectSize,
      count: count
    }
    onAddCart(productCart);

    setShowCart(true);
  }

  // 찜목록에 추가
  const handleAddToWish = ()=>{
    console.log("찜");
    onAddWishList(product);
    setShowWish(true);
  }

  // 팝업닫기
  const handleClosePopup = ()=>{
    setShowCart(false);
    setShowWish(false);
  }

  return (
    <div className="sub-page-wrap">
      <div className="inner">
        <div className="product-wrap">
          <div className="product-img">
            <img src={product.image} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="product-text">
            <p className="cate-title">{product.category}</p>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">가격 : {product.price}</p>
            <div className="product-size">
              <strong>사이즈</strong>
              <ul>
                {sizes.map((size, id)=>(
                  <li key={id}><button className={selectSize === size ? "active" : ""} onClick={()=>setSize(size)}>{size}</button></li>
                ))}
              </ul>
            </div>
            <div className="product-count">
              <strong>수량</strong>
              <div>
                <button onClick={()=>setCount((c)=>Math.max(1, c-1))}>-</button>
                <span>{count}</span>
                <button onClick={()=>setCount((c)=>c+1)}>+</button>
              </div>
            </div>
            <div className="cart-btn">
              <button onClick={handleAddToWish}>찜하기</button>
              <button onClick={handleAddToCart}>장바구니</button>
            </div>
          </div>
        </div>
      </div>
      {/* 장바구니 팝업 */}
      {showCart ? <DetailCartPopup onClose={handleClosePopup}/> : ""}
      {/* 찜 팝업 */}
      {showWish ? <DetailWishPopup onClose={handleClosePopup}/> : ""}
    </div>
  )
}
