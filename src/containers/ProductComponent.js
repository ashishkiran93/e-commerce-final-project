import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./ProductComponent.css";
import './ProductList.css'



const ProductComponent = () => {

    const products = useSelector((state)=>state.allProducts.products)
    console.log(products)
    
    const renderList = products.map(product=>{

        return(
            <div className="content">
            <Link to={`/product/${product.id}`} className="product-link">
            <div className="card" key={product.id}>
            
               <div className="card-image-wrapper">
                  <img className="card-image" src={product.preview} alt="loading pic" />
               </div>
            
               <div className="card-content-wrapper">
                 <h3 className="product-name c">{product.name}</h3>
                 <p className="price c">Rs: {product.price}</p>
                 <p className="brand c">{product.brand}</p>
               </div>
            
            </div>
            </Link>
            </div>
        )
    })

    return ( <div className="content-box">
    {renderList}
    </div> );
}
 
export default ProductComponent;

