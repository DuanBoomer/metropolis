import React from 'react';
<<<<<<< HEAD
import './product_cards.css'

function ProductCard({ img, about, price, rating, title}) {
    var ratingStars = '';
=======
import { useNavigate } from 'react-router-dom';
import './product_cards.css'

function ProductCard({ id, img, about, price, rating, title}) {
    var ratingStars = '';
    const navigate = useNavigate();
>>>>>>> db2f94220e6b37e8ad9ba5548d14e58f563d1734
    for (let i = 0; i < rating; i++) {
        ratingStars += '⭐'
    }

<<<<<<< HEAD
    return (
        <article className='product-card'>
            <img src={img} alt="" />
            <p className='product-card-line-one'>
                <span>{title}</span>
=======
    function handleCLick(){
        window.scrollTo(0, 0)
        navigate(`/product/${id}`)
    }

    return (
        <article className='product-card' onClick={handleCLick}>
            <img src={img} alt="" />
            <p className='product-card-line-one'>
                <span>{title} {id}</span>
>>>>>>> db2f94220e6b37e8ad9ba5548d14e58f563d1734
                <span className='product-prize'>&#8377; {price}</span>
            </p>
            <p className='product-card-line-two'>{about}</p>
            <p className='product-card-rating'>{ratingStars}</p>
            <button>Add to Cart</button>
        </article>
    )
}

export default ProductCard;

