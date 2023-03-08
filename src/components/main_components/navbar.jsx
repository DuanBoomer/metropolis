import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  // const [searchBoxStyle, setSearchBoxStyle] = React.useState("navbar-search")
  
  // function changeSearchBoxStyle(){
  //   setSearchBoxStyle("navbar-search-two")
  // }

  return (
    <nav>
      <header className='company-title'>Metropolis</header>
      <ul className='navbar-buttons'>
        <li><button><Link to='/product' className='link'>Categories</Link></button></li>
        <li><button>Deals</button></li>
        <li><button>Latest</button></li>
        <li><button>Delivery</button></li>
        <li className='search'><input placeholder='Search'/></li>
        <li><button>Cart</button></li>
        <li><button>Account</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
 