import React from 'react';
import ProductCard from '../cards/product_cards'
// import Listing from '../minor_components/listing'
import productData from '../../data/product'
import travelData from '../../data/travel'
import Heading from '../minor_components/heading'
import Button from '../minor_components/button'

function BestSellersListing() {
    var [dataRef, setDataRef] = React.useState(productData);
    const cardsss = dataRef.map(
        function ({ img, about, price, rating, title }) {
            return <ProductCard
                img={img}
                about={about}
                price={price}
                rating={rating}
                title={title}
                gap='10px'
            />
        }
    )

    function travel(){
        setDataRef(travelData)
    }

    function product(){
        setDataRef(productData)
    }


    return (
        <div>
            <Heading text="Best Sellers" size={2} />
            <div style={{ paddingLeft: '18rem', paddingRight: '9rem', }}>
                <div>
                    <Button text="Travel" handleClick={travel}/>
                    <Button text="Product" handleClick={product}/>
                    <Button text="Gadget" handleClick={travel}/>
                    <Button text="Fashion" handleClick={product}/>
                    <Button text="Toys" handleClick={travel}/>
                    <Button text="Education" handleClick={product}/>
                    <Button text="Fitness" handleClick={travel}/>
                    <Button text="Sneakers" handleClick={product}/>
                </div>
                {cardsss}

            </div>
        </div>
    );
}

export default BestSellersListing;
