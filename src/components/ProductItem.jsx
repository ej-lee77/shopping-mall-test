

export default function ProductItem({sendItem}) {
  return (
    <div>
        <div className="img-box">
            <img src={sendItem.image} alt={sendItem.title} />
        </div>
        <div className="text-box">
            <h3>{sendItem.title}</h3>
            <div>
                <strong>{sendItem.price}원</strong>
                <span>20%</span>
            </div>
        </div>
    </div>
  )
}
