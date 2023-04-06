import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './product_cards.css'

function ProductCard({img, about, price, rating, title, description, quantity}) {
    
    function handleCLick(){
        window.scrollTo(0, 0)
    }

    const data = {
        name: title, 
        price: price, 
        long_description: description, 
        rating: rating, 
        images: img,
        quantity: quantity,
    }

    var ratingStars = '';
    for (let i = 0; i < rating; i++) {
        ratingStars += '⭐'
    }
    return (
        <Link to='/product/0' state={data} style={{textDecoration: 'none', color: 'inherit'}}>
        <article className='product-card' onClick={handleCLick}>
            <img src={typeof(img)=='object'?img.main:img} alt="" />
            <p className='product-card-line-one'>
                <span>{title}</span>
                <span className='product-prize'>&#8377; {price}</span>
            </p>
            <p className='product-card-line-two'>{about}</p>
            <p className='product-card-rating'>{ratingStars}</p>
            <button>Add to Cart</button>
        </article>
        </Link>
    )
}

export default ProductCard;

