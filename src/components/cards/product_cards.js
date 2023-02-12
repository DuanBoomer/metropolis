import React from 'react';
import './product_cards.css'

function ProductCard({ img, about, price, rating, title, gap}) {
    var ratingStars = '';
    for (let i = 0; i < rating; i++) {
        ratingStars += '⭐'
    }

    const styles ={
        margin: gap ? `${gap}` : '10px'
    }

    return (
        <div className='product-card' style={styles}>
            <img className='product-image' src={img} />
            <div className='product-desciption'>
                <div className='product-title-and-price'>
                    <h2 className='product-title'>{title}</h2>
                    <p className='product-price'>${price}</p>
                </div>
                <p className='product-about'>{about}</p>
                <p className='product-rating'>{ratingStars}</p>
                <button className='product-add-to-cart'>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;

