const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = product => (dispatch, getState) => {
    // dispatch
    dispatch({
        type: ADD_TO_CART,
        payload: product,
    });
}


export const removeFromCart = product => (dispatch, getState) => {
    // dispatch
    dispatch({
        type: REMOVE_FROM_CART,
        payload: product,
    });
}