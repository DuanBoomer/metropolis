
import Navbar from './components/main_components/navbar'
import Header from './components/main_components/banner'

import CategoryCardListing from './components/main_components/category_card_listing';
import ProductCardListing from './components/main_components/product_card_listing.js';
import BestSellersListing from './components/main_components/best_sellers_listing.js';
import HelperServices from './components/main_components/helper_services';
import CategoryCard from './components/cards/category_cards';
function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      {/* <CategoryCard title="Shoes" img="sample_shoe_image.jpg" number={1}/> */}
      <CategoryCardListing/>
      <ProductCardListing/>
      <BestSellersListing/>
      <HelperServices/>
    </div>
  );
}

export default App;
