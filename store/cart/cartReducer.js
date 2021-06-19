import { ADD_ITEMS, REMOVE_ITEMS } from './cartTypes'

const cartReducer = (state, action) => {
    const product = action.name 

    switch(action.type) {
        case ADD_ITEMS: return {
            ...state,
            [product]: state[product] + action.quantity
        }
        case REMOVE_ITEMS: return {
            ...state,
            [product]: state[product] - action.quantity
        }
        default: return state
    }
}

export default cartReducer