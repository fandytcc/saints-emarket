"use client"

import { useReducer } from "react"
import CartContext from "./cart-context"
import { CartInfo } from "../models/cart-info.model"

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state: any, action: any) => {
  if (action.type === 'ADD_CART_ITEM') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        
    const existingCartItemIndex = state.items.findIndex(
      (item: CartInfo) => item.id === action.item.id)
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
    const existingCartItemIndex = state.items.findIndex(
      (item: CartInfo) => item.id === action.id)
    const existingCartItem = state.items[existingCartItemIndex]
    const updatedTotalAmount = state.totalAmount - existingCartItem.price

    let updatedItems
    if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item: CartInfo) => item.id !== action.id)
    } else {
        const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
    }

    return {
        items: updatedItems, 
        totalAmount: updatedTotalAmount
    }
  }

  if (action.type === 'CLEAR') {
    return defaultCartState
}

  return defaultCartState
}

// TODO: clear cart, use ReactQuery, api route for fetching, useState & useEffect to fetch products

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