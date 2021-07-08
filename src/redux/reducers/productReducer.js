import { ActionTypes } from "../action_type/action_type";

const initialState = {
    products: []
}

const initialCartState ={
    cartList:[],
    count:0,
    cartTotal:0
}

export const ProductReducer = (state = initialState, {type, payload}) =>{
  switch(type){
      case ActionTypes.SET_PRODUCTS: return {
          ...state,
          products: payload
      };
      default: 
      return state;
  }
}

export const selectedProductReducer = (state={},{type , payload }) => {
    switch(type){
      case ActionTypes.SELECTED_PRODUCT: 
               return {...state, ...payload}

     case ActionTypes.REMOVE_SELECTED_PRODUCT:
          return {}

      default: return state         
    }
}

export const cartReducer = ( state= initialCartState, {type,payload, payloadCount}) =>{
    switch(type){
        case ActionTypes.ADD_TO_CART:
            console.log(payloadCount)
            let check = state.cartList.find((pr)=>pr.id==payload.id)
            if(check){
                payload.count=payloadCount
               return{
                   ...state,
                   count:state.count+1,
                   cartTotal: state.cartTotal+payload.price
               }
            }

            else{
                payload.count=payloadCount
                return{
                    ...state,
                    cartList:[...state.cartList,payload],
                    count: state.count+1,
                    cartTotal: state.cartTotal+ payload.price
                }
            }
            
        case ActionTypes.CLEAR_CART:
            return{
                ...state,
                cartList:[],
                count:0,
                cartTotal:0
            }

        case ActionTypes.REMOVE_FROM_CART:
            
          payload.count= payload.count-1
          if(payload.count===0){
              state.cartList = state.cartList.filter(productToBeRemoved=> productToBeRemoved.id!==payload.id)
          }
            return{
                ...state,
                cartList: [...state.cartList],
                count: state.count-1,
                cartTotal: state.cartTotal-payload.price
            }

         case ActionTypes.INCREMENT_CART:
             payload.count = payload.count+1
             return{
                 ...state,
                 cartList:[...state.cartList],
                 count: state.count+1,
                 cartTotal:state.cartTotal+payload.price
             }

            default: return state
    }
}