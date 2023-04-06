import { useLocation, useParams } from 'react-router-dom'
import './delivery_items.css'
import productData from '../../database/product_card_data'
import DeliveryItemsInfo from './delivery_items_info'
function DeliveryItems() {
    // const { id, count } = useParams()
    const location = useLocation()

    console.log(location.state);

    //fetch data with id
    const { name, image, price, quantity } = location.state
        // productData.find(function (product) {
        //     return product.id == id
        // })

    ////////////////
    return (
        <section className="delivery-items">
            <h2>Review Item And Shipping</h2>

            <article className='delivery-items-grid'>
                <DeliveryItemsInfo
                    // key={id}
                    // id = {id}
                    title={name}
                    price={price}
                    img={image}
                    quantity={quantity}
                />
            </article>
        </section>
    )
}

export default DeliveryItems