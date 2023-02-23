import React from 'react';
import './product_details.css'
import productData from '../../data/product'
import { useNavigate, useParams } from 'react-router-dom';

function ProductDetails() {
    const navigate = useNavigate();
    const {id} = useParams();

    // fetch the data from id
    const {img, about, price, rating, title} = 
    productData.find(function(product){
        return product.id == id
    })

    // useEffect(function(){
    //     for (let i = 0; i < productData.length; i++) {
    //         if (productData.id == id) {
                
    //         }
    //         const object = productData[i];
            
    //     }
    // }, [])
    
    ///////////////////

    var ratingStars = '';
    for (let i = 0; i < rating; i++) {
        ratingStars += '⭐'
    }

    const [numberOfProduct, setNumberOfProducts] = React.useState(1)
    const productImageData = [
        img,
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

    function buyNowHandleClick(){
        window.scrollTo(0, 0)
        navigate(`/payment/${id}`)
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
                <h2>{title} {id}</h2>
                <p>{about}</p>
                <p>{ratingStars}</p>
                <h3>&#8377; {price}</h3>
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

                        <button onClick={buyNowHandleClick}>Buy Now</button>
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