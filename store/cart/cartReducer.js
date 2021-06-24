import { ADD_ITEMS, REMOVE_ITEMS, RESET } from './cartTypes'
import { initialState } from '../store'

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
        case RESET: return initialState
        default: return state
    }
}

export default cartReducer