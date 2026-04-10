
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useProductStore } from '../store/useProductStore'
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

export default function SectionSwiper({category, count, direction, delay}) {
    const {items, onItemsCategory} = useProductStore();
    const cateItems = onItemsCategory(category);
    // item이 다 불려지기 전에 카테고리가 실행됨
    // if(!items.length) return <div>로딩중...</div>
    console.log("카테고리섹션", category, cateItems);
  return (
    <div className='home-goods-list'>
        <Swiper
            modules={[Navigation, Scrollbar, Autoplay]}
            spaceBetween={40}
            slidesPerView={count}
            loop={true}
            autoplay={{delay:delay ? delay : 3000}}
            direction={direction ? direction : "horizontal"}>
                {cateItems.map((cate, id)=>(
                    <SwiperSlide>
                        <Link to={`/product/${cate.id}`}>
                            <ProductItem sendItem={cate} />
                        </Link>
                    </SwiperSlide>
                ))}
        </Swiper>
    </div>
  )
}
