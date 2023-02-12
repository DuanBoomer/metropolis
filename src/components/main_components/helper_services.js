import React from 'react';
import Heading from '../minor_components/heading'
import HelpCard from '../cards/help_card'
import Listing from '../minor_components/listing';

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
            title="Returns and Refunds"
            about="Updates on sale Shopping in our Stores"
            image="grape-sneaker.jpg"
        />,

    ]

    return (
        <div className='helper-items-outter'>
            <Heading text="Services To Help You Shop" size={1} />
            <Listing
                cards={cardsss}
                centerItems={true}
            />
        </div>
    );
}

export default HelperServices;
