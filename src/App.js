
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
        <Route path='/payment/:id/:count' element={<Payment />} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
