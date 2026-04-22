import { useEffect } from 'react'
import { useProductStore } from '../store/useProductStore'
import ProductItem from './ProductItem';
import { Link, useParams } from 'react-router-dom'
import "./scss/ProductList.scss"
import SectionTitle from './SectionTitle';

export default function ProductList({category}) {
    // 주소줄에 있는 파라메터값 받아서 사용하기
    const params = useParams();
    const paraCate = params.category || category;
    const paraSubCate = params.subCategory;

    // console.log("카테고리:", paraCate, paraSubCate);

    const {items, onFetchItems, searchWord, sortType, sortOrder, onSetSort} = useProductStore();

    // 컴포넌트가 렌더링될떄 items에 데이터가 있는지 체크하고 없으면 불러오기
    useEffect(()=>{
        if(items.length === 0){
            onFetchItems();
        }
    }, [items]);

    // if(!items.length) return <div>로딩중...</div>

    // 카테고리별 필터링
    // let cateItems = onItemsCategory(category);
    let cateItems = items.filter((item)=>{
        // 메인 메뉴 카테고리 필터
        if(paraCate && paraCate !== "all" && item.category !== paraCate){
            return false;
        }
        // subcategory가 있을 경우 필터
        if(paraSubCate && item.subcategory !== paraSubCate){
            return false;
        }
        return true;
    }); 
    console.log(category, "카테고리별:", cateItems);

    // 검색
    if(searchWord){
        const lowerWord = searchWord.toLowerCase();
        cateItems = cateItems.filter((item)=>
            item.title.toLowerCase().includes(lowerWord));
    }

    // 필터
    // 배열.sort()데이터가 오름차순으로 정렬됨
    // 문자열을 기준으로 정렬을 한다. 숫자의 경우 오류가 생길수 있다
    // 한글정렬의 경우
    // 숫자의 앞뒤 수를 비교하는 수식
    // [10, 2, 5].sort((a, b)=>a - b)
    // 10-2 > 0 => 2, 10
    // 10-5 > 0 => 5, 10
    // a-b > 0 => a, b
    // a-b < 0 => a, b
    // a-b = 0 => 그대로
    // 문자 한글까지 지원되는 메서드 사용 
    // "a".localeCompare("b") -1 => a가 앞으로
    // "b".localeCompare("a") 1 => b가 뒤로간다
    if(sortType){
        console.log(sortType, sortOrder);
        cateItems = [...cateItems].sort((a,b)=>{
            switch(sortType){
                case "price":
                    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
                case "title":
                    return a.title.localeCompare(b.title);
                case "rating":
                    return b.rating - a.rating;
                default:
                    return 0;
            }
        })
    }

  return (
    <div className='sub-page-wrap inner'>
        <SectionTitle title={paraSubCate}/>
        {/* 필터버튼 */}
        <div className="sort-wrap">
            <button onClick={()=>onSetSort("price", "asc")}>가격 낮은순</button>
            <button onClick={()=>onSetSort("price", "desc")}>가격 높은순</button>
            <button onClick={()=>onSetSort("rating", "desc")}>인기순</button>
            <button onClick={()=>onSetSort("title", "asc")}>상품명순</button>
        </div>
        <ul className="sub-goods-list">
            {cateItems.map((item)=>(
                <li key={item.id}>
                    <Link to={`/product/${item.id}`}><ProductItem sendItem={item}/></Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
