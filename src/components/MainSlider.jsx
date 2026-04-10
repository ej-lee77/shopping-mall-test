
import './scss/MainSlider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MainSlider() {
    const slides = [
        {src: "./images/main_slider_01.jpg", alt: "slider1"},
        {src: "./images/main_slider_02.jpg", alt: "slider2"},
        {src: "./images/main_slider_03.jpg", alt: "slider3"},
        {src: "./images/main_slider_04.jpg", alt: "slider4"},
        {src: "./images/main_slider_05.jpg", alt: "slider5"},
    ];
  return (
    <>
        <Swiper className="mainslider-swiper"
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination
        autoplay={{delay:4000}}
        loop={true}
        >
            {slides.map(sli => (
                <SwiperSlide><img src={sli.src} alt={sli.alt} /></SwiperSlide>
            ))}
        </Swiper> 
    </>
  )
}
