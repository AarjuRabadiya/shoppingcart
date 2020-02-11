import {combineReducers} from 'redux';
import productReducers from './productsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    products:productReducers,
    cart:cartReducer,
})