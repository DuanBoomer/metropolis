import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product_cards.css'

function ProductCard({ id, img, about, price, rating, title}) {
    var ratingStars = '';
    const navigate = useNavigate();
    for (let i = 0; i < rating; i++) {
        ratingStars += '⭐'
    }

    function handleCLick(){
        window.scrollTo(0, 0)
        navigate(`/product/${id}`)
    }

    return (
        <article className='product-card' onClick={handleCLick}>
            <img src={img} alt="" />
            <p className='product-card-line-one'>
                <span>{title} {id}</span>
                <span className='product-prize'>&#8377; {price}</span>
            </p>
            <p className='product-card-line-two'>{about}</p>
            <p className='product-card-rating'>{ratingStars}</p>
            <button>Add to Cart</button>
        </article>
    )
}

export default ProductCard;

