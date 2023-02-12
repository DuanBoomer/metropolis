import React from 'react';
import './navbar.css'

function Navbar() {
  // const [searchBoxStyle, setSearchBoxStyle] = React.useState("navbar-search")
  
  // function changeSearchBoxStyle(){
  //   setSearchBoxStyle("navbar-search-two")
  // }

  return (
    <div className="navbar">
      <h1 className="navbar-title">Metropoli</h1>
        <p className="navbar-options">Categories</p>
        <p className="navbar-options">Deals</p>
        <p className="navbar-options">Latest</p>
        <p className="navbar-options">Delivery</p>
      <input className="navbar-search" placeholder="Search" type="text"/>
      <p className="navbar-options">Account</p>
      <p className="navbar-options">Cart</p>

    </div>
  );
}

export default Navbar;
