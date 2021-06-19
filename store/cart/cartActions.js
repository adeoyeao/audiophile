import { ADD_ITEMS, REMOVE_ITEMS } from "./cartTypes"

const addItems = (arg) => ({ type: ADD_ITEMS, name: arg.name, quantity: arg.quantity })
const removeItems = (arg) => ({ type: REMOVE_ITEMS, name: arg.name, quantity: arg.quantity })

export { addItems, removeItems }