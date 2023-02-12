import React from 'react';
import './help_card.css'

function HelpCard({ title, about, image }) {
    return (
        <article className='help-card'>
            <section>
                <h3>{title}</h3>
                <h4>{about}</h4>
            </section>
            <img src={image} alt="" />
        </article>
    )
}


export default HelpCard;
