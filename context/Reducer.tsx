import { Product } from "../models/shop";

export default (state: any, action: any) => {
    switch (action.type) {
        case 'DELETE':
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem: Product) => cartItem.id !== action.payload)
            }
        case 'ADD':
            return {
                ...state,
                cartItems: [action.payload, ...state.cartItems]
            }
        default:
            return state;
    }
}