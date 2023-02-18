import React from 'react';
import './product_details.css'

function ProductDetails() {
    const [numberOfProduct, setNumberOfProducts] = React.useState(1)
    const productImageData = [
        'grape-sneaker.jpg',
        '//lp2.hm.com/hmgoepprod?set=source[/a7/3b/a73bfad474732c09934857f89bc2f5a7b97f9b43.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]',
        'black-air-sneaker.jpg',
        'grape-sneaker.jpg',
        'black-air-sneaker.jpg',
    ]

    const [heroImage, setHeroImage] = React.useState(productImageData[0])

    function increaseNumberOfProducts(){
        setNumberOfProducts(function(prev){
            return prev+1
        })
    }

    function decreaseNumberOfProducts(){
        setNumberOfProducts(function(prev){
            return prev > 1 ? prev-1 : prev
        })
    }

    function updateHeroImage(event){
        setHeroImage(event.target.getAttribute('src'))
    }

    const productImages = productImageData.map(function(image){
        return (
            <li>
                <img src={image} onClick={updateHeroImage}/>
            </li>
        )
    })

    return (
        <section className="product-details">
            <section className="image-section">
                <img src={heroImage} alt="" />
                <ul>
                    {productImages}
                </ul>
            </section>

            <section className="text-section">
                <h2>Grape Sneakers</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi sint consequuntur doloribus enim explicabo aut cum accusamus veniam hic. Voluptate.</p>
                <p>⭐⭐⭐⭐⭐</p>
                <h3>$123 or $123/month</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quaerat.</p>
                <section className="cash-out-section">
                    <article className='cash-out-quantity-section'>

                        <article className='cash-out-quantity-counter'>
                            <button className='cash-out-quantity-counter-minus-button' onClick={decreaseNumberOfProducts}>-</button>
                            <p>{numberOfProduct}</p>
                            <button className='cash-out-quantity-counter-plus-button' onClick={increaseNumberOfProducts}>+</button>
                        </article>

                        <article>
                            <p>Only 12 items left!</p>
                            <p>Don't miss it</p>
                        </article>

                    </article>

                    <article className='cash-out-buttons-section'>

                        <button>Buy Now</button>
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