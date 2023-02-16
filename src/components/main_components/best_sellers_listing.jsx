import React from 'react';
import ProductCard from '../cards/product_cards'
// import Listing from '../minor_components/listing'
import data from '../../data/product'
import './best_sellers_listing.css'
import productdata from '../../data/product'
import traveldata from '../../data/travel'

function BestSellersListing() {
    const [data, setData] = React.useState(productdata)
    const cardsss = data.map(
        function ({ img, about, price, rating, title }) {
            return <ProductCard
                img={img}
                about={about}
                price={price}
                rating={rating}
                title={title}
            />
        }
    )

    function productData(){
        setData(productdata)
    }

    function travelData(){
        setData(traveldata)
    }

    return (
        <article className='best-sellers-listing'>
            <h2>Best Sellers</h2>
            <section>
                <ul className='best-sellers-categories'>
                    <li><button onClick={productData}>Travel</button></li>
                    <li><button onClick={travelData}>Product</button></li>
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
