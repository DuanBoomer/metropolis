
<<<<<<< HEAD
import Navbar from './components/main_components/navbar'
import Header from './components/main_components/banner'

import CategoryCardListing from './components/main_components/category_card_listing';
import TodaysDealsListing from './components/main_components/todays_deals_listing';
// import BestSellersListing from './components/main_components/best_sellers_listing';
import HelperServices from './components/main_components/helper_services';
import BestSellersListing from './components/main_components/best_sellers_listing';
// import HelpCard from './components/cards/help_card';
import Footer from './components/main_components/footer';
import DarkThemeToggler from './components/cards/dark-theme/dark-theme-toggler';
function App() {
  return (
    <div>
      <DarkThemeToggler/>
      <Navbar />
      <Header />
      <CategoryCardListing />
      <TodaysDealsListing/>
      <BestSellersListing/>
      <HelperServices/>
=======
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import Product from './pages/product';
import DarkThemeToggler from './components/cards/dark-theme/dark-theme-toggler';
import Navbar from './components/main_components/navbar';
import Footer from './components/main_components/footer';
import Payment from './pages/payment';
function App() {
  return (
    <div>
      <DarkThemeToggler />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/payment/:id' element={<Payment />} />
      </Routes>
>>>>>>> db2f94220e6b37e8ad9ba5548d14e58f563d1734
      <Footer/>
    </div>
  );
}
export default App;
