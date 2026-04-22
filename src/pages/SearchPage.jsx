import React from 'react'
import { useProductStore } from '../store/useProductStore'
import SectionTitle from '../components/SectionTitle';
import ProductItem from '../components/ProductItem';
import { Link } from 'react-router-dom';

export default function SearchPage() {
    const {items, searchWordAll} = useProductStore();

    let categoryItems = items;

    // 검색필터
    if(searchWordAll){
        const lowerWord = searchWordAll.toLowerCase();
        categoryItems = categoryItems.filter((item)=>
            item.title.toLowerCase().includes(lowerWord));
    }

  return (
    <div className='sub-page-wrap'>
        <div className="inner">
            <SectionTitle title="전체검색"/>
            <ul className="sub-goods-list">
                {categoryItems.map((item)=>(
                    <li key={item.id}>
                        <Link to={`/product/${item.id}`}>
                            <ProductItem sendItem={item}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

