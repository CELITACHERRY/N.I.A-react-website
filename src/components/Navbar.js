import React, { useState } from "react";
import {Link} from 'react-router-dom';
//Line13 menu icon: L14 is the hamburger menu: we are using useState to click icon to toggle from bars to an x 
function Navbar() {
    //in order to useState for the menu icon toggle we have to assign the state to a const, we want to setClick is to 
    //update what state was into what you want it to be
    const [click, setClick] = useState(false);

    //sets the clicks value to handle the click to turn it back to true
    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = ()=> setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
              Now I Am (N.I.A.) <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
    
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}></ul>
              <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                  </Link>
              </li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
