import React from 'react';
import ProductCard from '../cards/product_cards'
import Listing from '../minor_components/listing'
import data from '../../data/product'

function ProductCardListing() {
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
    return (
        <Listing cards={cardsss} title="Todays Best Deals For You"/>
    );
}

export default ProductCardListing;
