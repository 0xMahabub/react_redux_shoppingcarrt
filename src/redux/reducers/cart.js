const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'


export const cartReducer = (
    state = {
        cart: JSON.parse(localStorage.getItem("cart") || "[]")
    },
    action
) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        default: return state
    }
}