export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SHOW = 'SHOW';
export const HIDE='HIDE';

export function addProduct({id, name,image, description, price}) {
    return {
        type: ADD_PRODUCT,
        payload: {id, name,image, description, price}
    }
}
export function updateProduct({id, name}) {
    return {
        type: UPDATE_PRODUCT,
        payload: {id, name}
    }
}