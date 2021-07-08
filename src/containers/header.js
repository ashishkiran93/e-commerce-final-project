import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
   const count = useSelector((state)=>state.cart.count)
    return ( 
      //   <div className="ui fixed menu">
      //      <div className="ui container center">
      //         <Link to="/">
      //        <h2>SHOPLANE</h2>
      //        </Link>
      //        <Link to="/cart">
      //        <i className="shopping cart icon basket"><span className="basket-count">{count}</span></i>
      //        </Link>
      //      </div>
      //   </div>

      <div id="navbar">
         <div id="left">
         <Link to="/" className="logo-link">
            <h2 className="logo">SHOP<span id="lane">LANE</span></h2> 
         </Link>   
         </div>

         <div>
            <input className="input-field" placeholder=" Search Products"/>
         </div>

         <div id="right">
            <div id="cart">
               <Link to="/cart">
               <i class="fas fa-shopping-cart basket"> </i><span className="cart-count">{count}</span>
               </Link>
            </div>
            <div id="avatar">
               <i class="fas fa-user-circle avatar"></i>
            </div>
         </div>
      </div>
   
     );
}
 
export default Header;