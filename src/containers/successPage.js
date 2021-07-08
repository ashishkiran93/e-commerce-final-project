import React from 'react';
import successPic from './success.jpeg'
import './successPage.css';

const SuccessPage = () => {
    return ( <div className="successPage-container">
        <img className="success-Image" src={successPic}/>
        
        <h3>Order placed successfully!!!</h3>
        <p>We have sent you an email with the order details.</p>
    </div> );
}
 
export default SuccessPage;