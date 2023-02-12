import React from 'react';
import './category_cards.css'

function CategoryCard({ title, img, number }) {
    return (
        <article className='category-card'>
            <img src={img}/>
            <h2>{title}</h2>
            <h3>{number}</h3>
        </article>
        
    )
}

export default CategoryCard;
