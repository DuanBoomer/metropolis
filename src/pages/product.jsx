import ProductDetails from "../components/product_page/product_details";
import ProductSpecifications from "../components/product_page/product_specifications";
import SimilarItems from "../components/product_page/similar_items";
import TodaysDealsListing from "../components/main_components/todays_deals_listing";

function Product() {
    return (
        <div>
            <ProductDetails />
            <ProductSpecifications />
            <SimilarItems />
            <TodaysDealsListing/>
        </div>
    )
}

export default Product;