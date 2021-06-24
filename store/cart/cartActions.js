import { ADD_ITEMS, REMOVE_ITEMS, RESET } from "./cartTypes"

const addItems = (arg) => ({ type: ADD_ITEMS, name: arg.name, quantity: arg.quantity })
const removeItems = (arg) => ({ type: REMOVE_ITEMS, name: arg.name, quantity: arg.quantity })
const reset = () => ({ type: RESET })

export { addItems, removeItems, reset }