
import { useProductStore } from '../store/useProductStore';

export default function OrderList() {
    const {orderLists, onCancelOrder} = useProductStore();
    console.log(orderLists);
  return (
    <div className='order-list-wrap'>
        {orderLists.map((order)=>(
          <div key={order.id}>
            <div className="order-top">
              <p>주문번호: {order.id}</p>
              <p>주문날짜: {order.date}</p>
              <p>주문상세: {order.status}</p>
            </div>
            <div className="order-middle">
              <ul className='cart-list'>
                {order.items?.map((item, id)=>(
                  <li key={id}>
                    <div className='cart-goods-info'><img src={item.image} alt={item.title} /></div>
                    <div>
                      <p>상품명: {item.title}</p>
                      <p>주문개수: {item.count}</p>
                    </div>
                    <button disabled={order.status === "취소신청중"} onClick={()=>onCancelOrder(order.id)}>취소</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-bottom">
              <p>총결제금액: {order.price}</p>
            </div>
          </div>
        ))}
    </div>
  )
}
