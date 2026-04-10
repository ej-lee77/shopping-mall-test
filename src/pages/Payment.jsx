import { useEffect, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { useProductStore } from '../store/useProductStore'
import PaymentModal from '../components/PaymentModal';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Payment() {
  const {totalPrice, coupons, finalPrice, onSelectedCoupon, onFinalPrice, cartItems, selectedCoupon, onAddOrder} = useProductStore();

  //useLocation() 현재 페이지의 url + state정보를 가져오는 훅
  const navigate = useNavigate();
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || cartItems;
  const selectedTotal = location.state?.selectedTotal || totalPrice;
  console.log("cart에서 넘어온 데이터", selectedItems, selectedTotal);

  const [showPay, setShowPay] = useState(false);

  const handlePayment = ()=>{
    setShowPay(true);
  }

  const handleClosePopup = ()=>{
    setShowPay(false);
  }

  const handleConfirm = ()=>{
    alert("결제 완료 주문 내역 확인");

    onAddOrder({
      items: selectedItems,
      total: finalPrice
    });
    // onAddOrder(selectedItems,finalPrice);

    navigate("/userinfo");
  }


  useEffect(()=>{
    onFinalPrice();
  }, [totalPrice, selectedCoupon])
  return (
    <div className="sub-page-wrap">
      <div className="inner">
        <SectionTitle title="결제하기" />
          <div className="payment-list-wrap cart-wrap">
              <ul className='cart-list'>
                  {selectedItems.map((item) => (
                      <li>
                          <div className="cart-goods-info">
                              <img src={item.image} alt="" />
                              <div>
                                  <p>{item.title}</p>
                                  <p>{item.price}</p>
                              </div>
                          </div>
                          <div className="cart-right">
                              <p>{item.count}</p>
                              <p>{item.price * item.count}</p>
                          </div>
                      </li>
                  ))}
              </ul>
          </div>
        <div className="coupon-wrap">
          <div>총결게금액: {totalPrice}</div>
          <div>쿠폰:
            {coupons.map((c)=>(
              <label key={c.id}>
                <input type="radio" name="coupon" checked={selectedCoupon?.id === c.id} onChange={()=>onSelectedCoupon(c)}/>
                {c.text}
              </label>
            ))}
            <label>
              <input type="radio" name='coupon' onChange={()=>onSelectedCoupon(null)}/>쿠폰적용안함
            </label>
          </div>
          <div>최종결제금액: {finalPrice}</div>
          <p><button onClick={handlePayment}>결제하기</button></p>
        </div>
      </div>
      {
        showPay? <PaymentModal 
        onClose={handleClosePopup}
        onConfirm={handleConfirm}/> : ""
      }
    </div>
  )
}
