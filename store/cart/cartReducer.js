import { ADD_ITEMS, REMOVE_ITEMS, RESET, SESSION_STORAGE } from './cartTypes'
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
        case RESET: return {
            ...state,
            ...initialState
        }
        case SESSION_STORAGE: return {
            ...state,
            ...action.session,
        }
        default: return state
    }
}

export default cartReducer