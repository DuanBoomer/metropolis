import React from 'react';
import './category_cards.css'

function CategoryCard({ title, img, number }) {
    return (
        <article className='category-card'>
            <img src={img}/>
            <h3>{title}</h3>
            {/* <h4>{number}</h4> */}
        </article>
        
    )
}

export default CategoryCard;
