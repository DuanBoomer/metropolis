import { useParams } from 'react-router-dom'
import './delivery_items.css'
import productData from '../../data/product'
import DeliveryItemsInfo from './delivery_items_info'
function DeliveryItems() {
    const { id } = useParams()

    //fetch data with id
    const { img, price, title } =
        productData.find(function (product) {
            return product.id == id
        })

    ////////////////
    return (
        <section className="delivery-items">
            <h2>Review Item And Shipping</h2>

            <article className='delivery-items-grid'>
                <DeliveryItemsInfo
                    id = {id}
                    title={title}
                    price={price}
                    img={img}
                />
            </article>
        </section>
    )
}

export default DeliveryItems