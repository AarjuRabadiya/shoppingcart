export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const UPDATE_ITEM_UNITS = 'UPDATE_ITEM_UNITS';
export const DELETE_CART = 'DELETE_CART';
export const CHECK_CART = 'CHECK_CART';

export function addToCart({id, name,image, description, price, units=1}) {
    return {
        type: ADD_TO_CART,
        payload: {id, name, image, description, price, units}
    }
}
export function deleteFromCart({id}) {
    return {
        type: DELETE_FROM_CART,
        payload: {id}
    }
}
export function updateItemUnits({id, units}) {
    return {
        type: UPDATE_ITEM_UNITS,
        payload: {id, units}
    }
}
export function deleteCart() {
    return {
        type: DELETE_CART
    }
}

export function checkCart(){
    return{
        type:CHECK_CART
    }
}