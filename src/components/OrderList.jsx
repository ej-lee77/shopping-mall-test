
import { useProductStore } from '../store/useProductStore';

export default function OrderList() {
    const {orderLists} = useProductStore();
    console.log(orderLists);
  return (
    <div className='order-list-wrap'>
        {orderLists.map((order)=>(
          <div key={order.id}>
            <div className="order-top">
              <p>주문번호: {order.id}</p>
              <p>주문날짜: {order.date}</p>
              <p>주문상세: </p>
            </div>
            <div className="order-middle">
              <ul>
                {order.items?.map((item, id)=>(
                  <li key={id}>
                    <div><img src={item.image} alt={item.title} /></div>
                    <div>
                      <p>상품명: {item.title}</p>
                      <p>주문개수: {item.count}</p>
                    </div>
                    <button>취소</button>
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
