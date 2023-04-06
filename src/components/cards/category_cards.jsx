import React from 'react';
import './category_cards.css'

function CategoryCard({ title, img, number, tag_id }) {
    return (
        <a href={`#${tag_id}`}>

        <article className='category-card'>
            <img src={img}/>
            <h3>{title}</h3>

            {/* <h4>{number}</h4> */}
        </article>
        </a>
        
    )
}

export default CategoryCard;
