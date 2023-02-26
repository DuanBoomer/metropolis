import React from 'react';
import './dark-theme-toggler.css'

function DarkThemeToggler() {
    const [iconPosition, setIconPosition] = React.useState('left')
    if(iconPosition === 'left'){
        document.documentElement.style.setProperty('--primary-color', 'white');
        document.documentElement.style.setProperty('--secondary-color', 'black');
        document.documentElement.style.setProperty('--primary-accent-color', 'rgb(45, 45, 45)');
        document.documentElement.style.setProperty('--secondary-accent-color', 'rgb(198, 198, 198)');
    }else{
        document.documentElement.style.setProperty('--primary-color', 'black');
        document.documentElement.style.setProperty('--secondary-color', 'white');
        document.documentElement.style.setProperty('--primary-accent-color', 'rgb(198, 198, 198)');
        document.documentElement.style.setProperty('--secondary-accent-color', 'rgb(45, 45, 45)');
    }

    function toggle() {
        setIconPosition(function(prev){
            return prev === 'left' ? 'right' : 'left'
        })
    }
    return (
        <section className='theme-toggler'>
            <img className={`theme-toggler-icon ${iconPosition}`} src="ying-yang.png" onClick={toggle} />
        </section>
        
    )
}

export default DarkThemeToggler;

