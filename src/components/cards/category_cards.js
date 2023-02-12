import React from 'react';
import './category_cards.css'

function CategoryCard({ title, img, number }) {
    return (
        <div className='category-card'>
            <h1 className='category-card-number'>{number}</h1>
            <div className='category-img'>
                <img src={img} />
            </div>
            <h2 className='category-title'>{title}</h2>
        </div>
    )
}

export default CategoryCard;
