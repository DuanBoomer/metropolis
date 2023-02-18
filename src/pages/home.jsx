
import Navbar from '../components/main_components/navbar'
import Header from '../components/main_components/banner'

import CategoryCardListing from '../components/main_components/category_card_listing';
import TodaysDealsListing from '../components/main_components/todays_deals_listing';

import HelperServices from '../components/main_components/helper_services';
import BestSellersListing from '../components/main_components/best_sellers_listing';

import Footer from '../components/main_components/footer';
import DarkThemeToggler from '../components/cards/dark-theme/dark-theme-toggler';


function Home() {
    return (
        <div>
            
            <Header />
            <CategoryCardListing />
            <TodaysDealsListing />
            <BestSellersListing />
            <HelperServices />
        </div>
    )
}

export default Home;