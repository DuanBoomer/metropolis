import React from 'react';
import CategoryCard from '../cards/category_cards'
import Listing from '../minor_components/listing'
import data from '../../data/categories'
import Heading from '../minor_components/heading';
import './category_card_listing.css'

function CategoryCardListing() {
    const cardsss = data.map(
        function({title, img, number}){
            return <CategoryCard title={title} img={img} number={number}/>
        }
    )
    return (
        <article>
            <Heading text={'Shop Our Categories'}/>
        <section className='category-cards'>
            {cardsss}
        </section>
        </article>
        // <Listing cards={cardsss} title="Shop Our Top Categories"/>
    );
}

export default CategoryCardListing;