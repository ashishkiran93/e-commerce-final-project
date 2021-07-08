import { ActionTypes } from "../action_type/action_type"



export const setProducts = (products) => {
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload: products
    };
}

export const selectedProducts = (product) => {
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload: product
    };
}

export const addToCart =(product,payloadCount)=>{
    return{
        type: ActionTypes.ADD_TO_CART,
        payload:product,
        payloadCount: payloadCount
    }
}

export const clearCart=()=>{
    return{
        type:ActionTypes.CLEAR_CART
    }
}

export const removeFromCart=(product)=>{
    return{
        type:ActionTypes.REMOVE_FROM_CART,
        payload:product
    }
}

export const removeSelectedProduct = ()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}

export const incrementCart=(product)=>{
    return{
        type:ActionTypes.INCREMENT_CART,
        payload:product
    
    }
}



