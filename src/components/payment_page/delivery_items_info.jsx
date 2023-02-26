import './delivery_items_info.css'

function DeliveryItemsInfo({id, title, img, price}) {
    return (
            <article className='delivery-items-info'>
                <img src={img} alt="" />
                <article>
                    <h3>{title} {id}</h3>
                    <p>&#8377; {price}</p>
                    <p>Quantity: 01</p>
                </article>
            </article>
    )
}

export default DeliveryItemsInfo