import React, { useState } from 'react';
import './cartContainer.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, incrementCart, removeFromCart } from '../redux/actions/action';
import { Link } from 'react-router-dom';


const CartContainer = () => {

    const dispatch= useDispatch()
    const count = useSelector((state)=>state.cart.count)
    const productList = useSelector((state)=>state.cart.cartList)
    const totalPrice = useSelector((state)=>state.cart.cartTotal)


    return ( <div className="cart-container">
        
        <div className="cart-items">
          <h1>TOTAL PRODUCTS IN CART- {count}</h1>
          <div className="productTotal">
             {productList.map((product)=>{
                 return(
                      <div className="cart-product-detail">
                         <div className="cart-product-image-wrapper">
                             <img className="cart-product-image" src={product.preview} alt="loding pic" />
                         </div>

                         <div>
                           <p className="cart-product-name">{product.name}</p>
                         </div>

                         <div>
                           <p className="cart-product-color">Rs-{product.price}</p>
                           <p className="product-count"> X <span>{product.count}</span></p>
                         </div>

                         <div>
                         {/* <i class="trash alternate icon"  onClick={(e)=>dispatch(removeFromCart(product))}></i> */}
                         <i class="fas fa-minus-circle update-btn" onClick={(e)=>dispatch(removeFromCart(product))}></i>
                         <i class="fas fa-plus-square update-btn" onClick={()=>dispatch(incrementCart(product))}></i>
                         </div>    
                      </div>
               )
           })}
         </div>
        </div>

        <div className="totalPriceSection">
            <div>
            <h1>
                TOTAL PRICE: {totalPrice}
            </h1>
            </div>
       
            <Link to="/success">
            <button className="add-to-cart-btn order-now" onClick={(e)=>dispatch(clearCart())}>ORDER NOW</button>
            </Link>
            
        </div>
        
    </div> );
}
 
export default CartContainer;

//{/* <button onClick={()=>dispatch(addToCart())}>ADD TO CART</button> */}