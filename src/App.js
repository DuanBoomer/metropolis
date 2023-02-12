
import Navbar from './components/main_components/navbar.js'
import Header from './components/main_components/banner.js'

import CategoryCardListing from './components/main_components/category_card_listing.js';
import ProductCardListing from './components/main_components/product_card_listing.js';
import BestSellersListing from './components/main_components/best_sellers_listing.js';
import HelperServices from './components/main_components/helper_services';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <CategoryCardListing/>
      <ProductCardListing/>
      <BestSellersListing/>
      <HelperServices/>
    </div>
  );
}

export default App;
