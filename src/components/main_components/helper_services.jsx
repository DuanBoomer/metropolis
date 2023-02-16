import React from 'react';
// import Heading from '../minor_components/heading'
import HelpCard from '../cards/help_card'
// import Listing from '../minor_components/listing';
import './helper_services.css'

function HelperServices() {
    const cardsss = [
        <HelpCard
            title="Frequently Asked Questions"
            about="Updates on sale Shopping in our Stores"
            image="grape-sneaker.jpg"
        />,
        <HelpCard
            title="Online Payment Process"
            about="Updates on sale Shopping in our Stores"
            image="grape-sneaker.jpg"
        />,
        <HelpCard
            title="Home Delivery Options"
            about="Updates on sale Shopping in our Stores"
            image="grape-sneaker.jpg"
        />,
        <HelpCard
            title="Returns and Refund Options"
            about="Updates on sale Shopping in our Stores"
            image="grape-sneaker.jpg"
        />,

    ]

    return (
        <article className='help-cards'>
            <h2>Services To Help You Shop</h2>
            <section className='help-card-services'>
                {cardsss}
            </section>
        </article>
    );
}

export default HelperServices;
