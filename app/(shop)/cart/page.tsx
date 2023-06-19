'use client'

import CartItem from "@/app/components/cart/CartItem";
import { CartInfo } from "@/app/models/cart-info.model";
import CartContext from "@/app/store/cart-context";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function CartPage() {
  const router = useRouter()
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

	const cartItemAddHandler = (item: CartInfo) => {
		cartCtx.addItem({...item, amount: 1})
	}

  const cartItemRemoveHandler = (id: string) => {
		cartCtx.removeItem(id)
	}
  
  return (
    <>
      <button 
        className="p-2 bg-teal-500 rounded mb-3" type="button"
        onClick={() => router.back()}>
        Go back
      </button>

      <h1 className="text-2xl font-bold">Cart</h1>
      
      <ul className="list-none m-0 p-0">
        {cartCtx.items.map((item: CartInfo) => 
          <CartItem 
            key={item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />)}
      </ul>

      <div className="block my-4 font-bold text-xl">
				<span className="mr-4">Total Amount</span>
				<span>{totalAmount}</span>
			</div>
      {hasItems && 
        <button 
          className='cursor-pointer p-2 bg-teal-500 rounded'
          type="button">
            Order
        </button>}
    </>
  )
}