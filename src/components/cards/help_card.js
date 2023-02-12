import React from 'react';
import './help_card.css'

function HelpCard({title, about, image}) {
    return (
        <div className='help-card'>
            <div className='help-card-text'>
                <h2 className='help-card-title'>{title}</h2>
                <p className='help-card-about'>{about}</p>
            </div>
            <img className='help-card-image' src={image} />
        </div>
    )
}


export default HelpCard;
