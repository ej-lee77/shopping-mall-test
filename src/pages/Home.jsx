import { useEffect } from 'react'
import SectionTitle from '../components/SectionTitle'
import MainSlider from '../components/MainSlider'
import { useProductStore } from '../store/useProductStore'
import SectionSwiper from '../components/SectionSwiper';

export default function Home() {
  const {items, onFetchItems} = useProductStore();
  // 컴포넌트가 화면에 붙을떄 처음 한번 실행
  useEffect(()=>{
    if(!items.length){
      onFetchItems();
    }
  }, []);
  return (
    <div className="container">
      <MainSlider />
      <main>
        <section className="inner">
          <SectionTitle 
            title="SPRING PROMOTION" 
            subTitle="지금 필요한 봄 상품 할인 찬스"/>
            <SectionSwiper category="" count={4} />
        </section>
        <section className="inner">
          <div className='women-list'>
            <div className='women-left'><img src="./images/women-big.jpg" alt="전소미 배경" /></div>
            <div className='women-right'>
              <SectionTitle 
                title="전소미 PICK 신상 자켓" 
                subTitle="네 가지 컬러웨이로 만나보세요"/>
                <SectionSwiper category="women" count={2} />
            </div>
          </div>
        </section>
        <section>
          <SectionTitle 
            title="SPRING 봄을 닮은 가벼운 실루엣" 
            subTitle="WOMEN SPRING JACKET"/>
            <SectionSwiper category="electronics" count={5} />
        </section>
      </main>
    </div>
  )
}
