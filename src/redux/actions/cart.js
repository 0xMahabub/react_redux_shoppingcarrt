const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = product => (dispatch, getState) => {
    const cart = getState().cart.cart.find((pd) => pd.id === product.id)
    // console.log("cart__", cart);
    if (cart) {
        alert("Duplicate try!");
        return false;
    }

    // dispatch
    dispatch({
        type: ADD_TO_CART,
        payload: {...product, qty: 1},
    });
}


export const removeFromCart = product => (dispatch, getState) => {
    const cart = getState().cart.cart.find((pd) => pd.id === product.id)
    if (!cart) {
        alert("Error! not found");
        return false;
    }

    const afterCart = getState().cart.cart.filter((p) => p.id !== product.id)

    // dispatch
    dispatch({
        type: REMOVE_FROM_CART,
        payload: afterCart,
    });
}