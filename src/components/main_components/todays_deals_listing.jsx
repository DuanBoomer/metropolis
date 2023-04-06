import React from 'react';
import ProductCard from '../cards/product_cards'
// import Listing from '../minor_components/listing'
// import data from '../../database/product_card_data'
// import data from '../../data/product'
import './todays_deals_listing.css'
function TodaysDealsListing() {
    const data = require('../../data/data_new.json')
    const electronicJSON = require('../../data/electronics.json')
    const cerealJSON = require('../../data/cereal.json')
    const booksJSON = require('../../data/books.json')
    const groceryJSON = require('../../data/grocery.json')
    
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

    function get_card_from_json_data(file){
        const cards = file.map(
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

        return cards
    }

    const electronicCards = get_card_from_json_data(electronicJSON)
    const cerealCards = get_card_from_json_data(cerealJSON)
    const bookCards = get_card_from_json_data(booksJSON)
    const groceryCards = get_card_from_json_data(groceryJSON)
    
    return (
        <article className='product-listing'>
            <h2>Todays Bext Deals</h2>
            <section className='product-cards'>
                {clothCards}
            </section>

            <h2>Deals in Electronics</h2>
            <section className='product-cards'>
                {electronicCards}
            </section>

            <h2>Some Sweet Deals</h2>
            <section className='product-cards'>
                {cerealCards}
            </section>

            <h2>For Your Table</h2>
            <section className='product-cards'>
                {bookCards}
            </section>

            <h2>Household Staples</h2>
            <section className='product-cards'>
                {groceryCards}
            </section>
        </article>
    );
}

export default TodaysDealsListing;
