import React from 'react';
import ProductCard from '../cards/product_cards'
// import Listing from '../minor_components/listing'
import data from '../../data/product'
import './todays_deals_listing.css'
function TodaysDealsListing() {
    const cardsss = data.map(
<<<<<<< HEAD
        function ({ img, about, price, rating, title }) {
            return <ProductCard
=======
        function ({ id, img, about, price, rating, title }) {
            return <ProductCard
                key={id}
                id={id}
>>>>>>> db2f94220e6b37e8ad9ba5548d14e58f563d1734
                img={img}
                about={about}
                price={price}
                rating={rating}
                title={title}
            />
        }
    )
    return (
        <article className='product-listing'>
            <h2>Todays Bext Deals</h2>
            <section className='product-cards'>
                {cardsss}
            </section>
        </article>
    );
}

export default TodaysDealsListing;
