import React from 'react';
import ProductCard from '../cards/product_cards'
// import Listing from '../minor_components/listing'
import './best_sellers_listing.css'
// import productData from '../../database/product_card_data'
import products from '../../database/product_card_data'
// import productdata from '../../data/product'
// import traveldata from '../../data/travel'

function BestSellersListing() {
    const clothingJSON = require('../../data/data_new.json')
    const electronicsJSON = require('../../data/electronics.json')
    const [data, setData] = React.useState(electronicsJSON)
    
    const cardsss = data.slice(0,10).map(
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

    function electronicsData(){
        setData(electronicsJSON)
    }

    function clothingData(){
        setData(clothingJSON)
    }

    function productData(){
        console.log('p');
    }

    function travelData(){
        console.log('o');
    }

    return (
        <article className='best-sellers-listing'>
            <h2>Best Sellers</h2>
            <section>
                <ul className='best-sellers-categories'>
                    <li><button id='electronics' onClick={electronicsData}>Electronics</button></li>
                    <li><button id='cloths' onClick={clothingData}>Cloths</button></li>
                    <li><button onClick={productData}>Gadget</button></li>
                    <li><button onClick={travelData}>Fashion</button></li>
                    <li><button onClick={productData}>Toys</button></li>
                    <li><button onClick={travelData}>Education</button></li>
                    <li><button onClick={productData}>Fitness</button></li>
                    <li><button onClick={travelData}>Sneakers</button></li>
                </ul>
            </section>
            <section className='best-sellers-cards'>
                {cardsss}
            </section>
        </article>
    );
}

export default BestSellersListing;
