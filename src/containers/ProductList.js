import React from 'react';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/action';
import './ProductList.css'



const ProductListing = () => {
    
    const products = useSelector((state)=>state)
    const dispatch = useDispatch()
    
    const fetchProducts = async () =>{
       const responce = await axios.get("https://607e95f802a23c0017e8ba2f.mockapi.io/habib-shoplane").catch(err=>{
           console.log("err",err)
       })
       
        dispatch(setProducts(responce.data)) 
      }

    useEffect(()=>{
        fetchProducts()
    },[])

    console.log(products)

    return ( 
        <ProductComponent />
     );
}
 
export default ProductListing;