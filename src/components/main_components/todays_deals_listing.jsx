import React from 'react';
import ProductCard from '../cards/product_cards'
// import Listing from '../minor_components/listing'
// import data from '../../database/product_card_data'
// import data from '../../data/product'
import './todays_deals_listing.css'
function TodaysDealsListing() {
    const data = require('../../data/data_new.json')
    const electronicJSON = require('../../data/electronics.json')
    
    const clothCards = data.map(
        function ({ name, price, short_description, long_description, rating, image, quantity }) {
            return <ProductCard
                img={image}
                about={short_description}
                price={price}
                rating={rating}
                title={name}
                description={long_description}
                quantity={quantity}
            />
        }
    )

    const electronicCards = electronicJSON.map(
        function ({ name, price, short_description, rating, image }) {
            return <ProductCard
                img={image}
                about={short_description}
                price={price}
                rating={rating}
                title={name}
                description={short_description}
                quantity={5}
            />
        }
    )
    
    return (
        <article className='product-listing'>
            <h2>Todays Bext Deals</h2>
            <section className='product-cards'>
                {clothCards}
            </section>
            <section className='product-cards'>
                {electronicCards}
            </section>
        </article>
    );
}

export default TodaysDealsListing;
