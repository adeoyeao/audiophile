import { ADD_ITEMS, REMOVE_ITEMS, RESET, SESSION_STORAGE } from "./cartTypes"

const addItems = (arg) => ({ type: ADD_ITEMS, name: arg.name, quantity: arg.quantity })
const removeItems = (arg) => ({ type: REMOVE_ITEMS, name: arg.name, quantity: arg.quantity })
const reset = () => ({ type: RESET })
const sessionStorage = (arg) => ({ type: SESSION_STORAGE, session: arg})

export { addItems, removeItems, reset, sessionStorage }