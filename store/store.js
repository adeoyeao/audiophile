import cartReducer from './cart/cartReducer'
import { createContext, useReducer } from 'react'

export const initialState = {
    zx9: 0,
    zx7: 0,
    xx59: 0,
    xx99_mark_one: 0,
    xx99_mark_two: 0,
    yx1: 0
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            { children }
        </Context.Provider>
    )
}

export const Context = createContext(initialState)
export default Store