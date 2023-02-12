import React from 'react';
import CategoryCard from '../cards/category_cards'
import Listing from '../minor_components/listing'
import data from '../../data/categories'

function BrandListing() {
    const cardsss = data.map(
        function({title, img, number}){
            return <CategoryCard title={title} img={img} number={number}/>
        }
    )
    return (
        <Listing cards={cardsss} title="Shop Our Top Categories"/>
    );
}

export default BrandListing;