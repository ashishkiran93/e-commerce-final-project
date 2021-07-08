
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeSelectedProduct, selectedProducts } from '../redux/actions/action';
import './productDetail.css'


const ProductDetail = () => {

    const dispatch = useDispatch()
    const {productId} = useParams()
    console.log(productId)

    const product = useSelector((state)=>state.product)
    console.log(product)
    const cartList = useSelector((state)=>state.cart.cartList)
    console.log(cartList)
    
    const [ productUrl , setProductUrl ] = useState([])
    const [clickedPreviewImage, setPreviewImage] = useState({
        previewImage: "",
        isClicked: false
    })
    const productCount=1
    const [quantity , setQuantity ] = useState(productCount)
    
    const fetchSelectedProduct = async ()=>{
        const responce = await axios.get(`https://607e95f802a23c0017e8ba2f.mockapi.io/habib-shoplane/${productId}`)
        .catch((err)=>{
            console.log(`error while fetching`)
        })
        setProductUrl(responce.data.photos)
        dispatch(selectedProducts(responce.data))
    }

    

    useEffect(()=>{
         if(productId) fetchSelectedProduct()
         return ()=>{
           dispatch(removeSelectedProduct())
         }
    }, [productId])

    
   const insertToCart = ()=>{
     setQuantity(prevState=>prevState+1)
     console.log(quantity)
     dispatch(addToCart(product, quantity))
   }

 

    return ( <div className="detail-container">
       
    <div className="left">
      <img className="preview-image" src={(clickedPreviewImage.isClicked==false)?product.preview:clickedPreviewImage.previewImage}/>
    </div>
    <div className="right">
       <div className="detail-content">
       <h2>{product.name}</h2>
       <p>{product.brand}</p>
       <p>Price: Rs <span className="price">{product.price}</span></p>
       <p>Description: <span className="price">{product.description}</span></p>
       <div className="photos-container">
       {
          productUrl.map((url)=>{
              return(
                      <div className="small-images-container">
                          <img className="small-images" src={url} alt="pics loading" onClick={()=>setPreviewImage({previewImage:url,isClicked:true})}/>
                      </div>
              )
          }) 
       }
       </div>
        
       </div>

        <button className="add-to-cart-btn"  onClick={insertToCart}>ADD TO CART </button>
    
  </div>
  
        
    </div> );
}
 
export default ProductDetail;