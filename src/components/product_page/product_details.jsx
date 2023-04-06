import React from 'react';
import './product_details.css'
// import productData from '../../data/product'
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import data from '../../database/product_details_data'

function ProductDetails() {
    // const navigate = useNavigate();
    const location = useLocation();

    const { name, price, long_description, rating, images, quantity } = location.state

    var ratingStars = '';
    for (let i = 0; i < rating; i++) {
        ratingStars += '⭐'
    }

    const [numberOfProduct, setNumberOfProducts] = React.useState(1)

    const productImageData = [images.main].concat(images.secondary)
    const [heroImage, setHeroImage] = React.useState(typeof (images) == 'object' ? images.main : images)

    function increaseNumberOfProducts() {
        setNumberOfProducts(function (prev) {
            return prev + 1
        })
    }

    function decreaseNumberOfProducts() {
        setNumberOfProducts(function (prev) {
            return prev > 1 ? prev - 1 : prev
        })
    }

    function updateHeroImage(event) {
        setHeroImage(event.target.getAttribute('src'))
    }

    function buyNowHandleClick() {
        window.scrollTo(0, 0)
        // navigate(`/payment/${0}/${numberOfProduct}`)
    }

    const productImages = productImageData.map(function (image) {
        return (
            <li>
                <img src={image} onClick={updateHeroImage} />
            </li>
        )
    })

    var data = {
        name: name,
        image: typeof (images) == 'object' ? images.main : images,
        price: price,
        quantity: numberOfProduct,
    }

    return (
        <section className="product-details">
            <section className="image-section">
                <img src={heroImage} alt="" />
                <ul>
                    {productImages}
                </ul>
            </section>

            <section className="text-section">
                <h2>{name}</h2>
                <p>{long_description}</p>
                <p>{ratingStars}</p>
                <h3>&#8377; {price}</h3>
                <section className="cash-out-section">
                    <article className='cash-out-quantity-section'>

                        <article className='cash-out-quantity-counter'>
                            <button className='cash-out-quantity-counter-minus-button' onClick={decreaseNumberOfProducts}>-</button>
                            <p>{numberOfProduct}</p>
                            <button className='cash-out-quantity-counter-plus-button' onClick={increaseNumberOfProducts}>+</button>
                        </article>

                        <article>
                            <p>Only {quantity} items left!</p>
                            <p>Don't miss it</p>
                        </article>

                    </article>

                    <article className='cash-out-buttons-section'>
                        <button onClick={buyNowHandleClick} className='buy-now'>
                            <Link to='/payment/0/1' state={data} style={{textDecoration: 'none', color: 'inherit'}}>
                                Buy Now
                            </Link>
                        </button>
                        <button>Add to cart</button>

                    </article>
                </section>

                <section className="product-delivery-section">
                    <strong>🚛Free Delivery</strong>
                    <p>Enter your postal address for delivery Availability</p>
                    <strong>💳Return Delivery</strong>
                    <p>Free 30days delivery Returns. Details</p>
                </section>
            </section>
        </section>
    )
}

export default ProductDetails;