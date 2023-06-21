import React from 'react';
import { CartInfo } from '../models/cart-info.model';


const CartContext = React.createContext({
    items: [],
    totalAmount: 0, 
    addItem: (item: CartInfo) => {},
    removeItem: (id: string) => {},
    clearCart: () => {}
})

export default CartContext