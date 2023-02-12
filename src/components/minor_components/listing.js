import React from 'react';
import Heading from './heading'

function Listing({cards, title, centerItems}) {
    const styles = {
        padding: '20px',
        display: 'flex',
        overflow: 'scroll',
        justifyContent: centerItems ? 'center' : ''
    }
    return (
        <div>
            <Heading text={title}/>
            <div className="list" style={styles}>
                {cards}
            </div>
        </div>
    );
}

export default Listing;
