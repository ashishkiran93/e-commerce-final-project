
import { combineReducers } from 'redux'
import { cartReducer, ProductReducer, selectedProductReducer } from './productReducer'

const reducers = combineReducers({
    allProducts: ProductReducer,
    product: selectedProductReducer,
    cart: cartReducer
})

export default reducers
