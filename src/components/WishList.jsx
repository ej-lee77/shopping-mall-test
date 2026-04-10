
import { useProductStore } from '../store/useProductStore'

export default function WishList() {
    const {wishLists, onRemoveWish} = useProductStore();
  return (
    <div className='cart-wrap'>
        <ul className="wish-list cart-list">
            {wishLists.map((wish)=>(
                <li key={wish.id}>
                    <div className="cart-goods-info">
                        <img src={wish.image} alt={wish.title} />
                    </div>
                    <div className="text-box">
                        <h3>{wish.title}</h3>
                        <p>{wish.price}</p>
                    </div>
                    <p><button onClick={()=>onRemoveWish(wish.id)}>삭제</button></p>
                </li>
            ))}
        </ul>
    </div>
  )
}
