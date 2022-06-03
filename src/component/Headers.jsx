import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <>
       <div className='header'>
        <NavLink to="/"><img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/></NavLink> 
         <div className="header__search">
           <input className='header__searchInput' type='text' />
           {/* {search logo} */}
            {/* // material ui is used for the icons  */}
           <SearchIcon className='header__searchIcon'/>
         </div>
         <div className="header__nav">
            <div className="header__option">
            <span className='header__optionLineOne'>Hello,Guest
                  </span>
                  <span className='header__optionTwo'> SignIn</span>
               
            </div>
            <div className="header__option">
            <span className='header__optionLineOne'>Returns
                  </span>
                  <span className='header__optionTwo'> & Orders</span>
              </div>
              <div className="header__option">
              <span className='header__optionLineOne'>Your 
                  </span>
                  <span className='header__optionTwo'> Prime</span>
              </div>
              <NavLink to="/checkout">
              <div className="header__optionBasket">
                <ShoppingBasketIcon />
               <span className='header_optionLineTwo header__basketCount'>0</span>
              </div>
              </NavLink>
              
         </div>
       </div>

     
    </>
  )
}

export default Header