import React from 'react';
import './navbar.css'

function Navbar() {
  // const [searchBoxStyle, setSearchBoxStyle] = React.useState("navbar-search")
  
  // function changeSearchBoxStyle(){
  //   setSearchBoxStyle("navbar-search-two")
  // }

  return (
    <nav>
      <header className='company-title'>Metro</header>
      <ul className='navbar-buttons'>
        <li><button>Categories</button></li>
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
