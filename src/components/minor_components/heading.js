import React from 'react';

function Heading({ text, size }) {
    const styles = {
        fontSize: size ? `${35 + 10*size}px` : '35px',
        margin: '60px 0px 30px 40px',
    }
    return (
        <h2 className='title' style={styles}>{text}</h2>
    )
}

export default Heading;
