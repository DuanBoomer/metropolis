
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import DarkThemeToggler from './components/cards/dark-theme/dark-theme-toggler';
import Navbar from './components/main_components/navbar';
import Footer from './components/main_components/footer';

function App() {
  return (
    <div>
      <DarkThemeToggler />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
