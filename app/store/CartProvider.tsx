"use client"

import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state: any, action: any) => {
  if (action.type === 'ADD_CART_ITEM') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        
    const existingCartItemIndex = state.items.findIndex((item: any) => item.id === action.item.id)
    const existingCartItem = state.items[existingCartItemIndex]

    let updatedItems

    if (existingCartItem) {
        const updatedItem = {
            ...existingCartItem, 
            amount: existingCartItem.amount + action.item.amount
        }
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
    } else {
        updatedItems = state.items.concat(action.item)
    }
    
    return {
        items: updatedItems, 
        totalAmount: updatedTotalAmount
    }
  }

  if (action.type === 'REMOVE_CART_ITEM') {

  }

  if (action.type === 'CLEAR') {
    return defaultCartState
}

  return defaultCartState
}

// TODO: productItemForm to add, Cart item add & remove
// use ReactQuery, api route for fetching

const CartProvider = (props: any) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = (item: any) => {
      dispatchCartAction({ type: 'ADD_CART_ITEM', item })
  }

  const removeItemToCartHandler = (id: string) => {
      dispatchCartAction({ type: 'REMOVE_CART_ITEM', id })
  }

  const clearCartHandler = () => {
      dispatchCartAction({ type: 'CLEAR' })
  }

  const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount, 
      addItem: addItemToCartHandler,
      removeItem: removeItemToCartHandler,
      clearCart: clearCartHandler
  }

  return <CartContext.Provider value={cartContext}>
   {props.children}
  </CartContext.Provider>
}

export default CartProvider