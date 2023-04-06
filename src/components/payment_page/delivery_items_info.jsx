import './delivery_items_info.css'

function DeliveryItemsInfo({id, title, img, price, quantity}) {
    return (
            <article className='delivery-items-info'>
                <img src={img} alt="image" />
                <article>
                    <h3>{title}</h3>
                    <p>&#8377; {price}</p>
                    <p>Quantity: {quantity}</p>
                </article>
            </article>
    )
}

export default DeliveryItemsInfo