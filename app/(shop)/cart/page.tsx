'use client'

import CartItem from "@/app/components/cart/CartItem";
import CartContext from "@/app/store/cart-context";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function CartPage() {
  const router = useRouter()
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

	const cartItemAddHandler = (item: any) => {
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
        Home
      </button>

      <h1 className="text-2xl font-bold">Cart</h1>
      
      <ul className="">
        {cartCtx.items.map((item: any) => 
          <CartItem 
            key={item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />)}
      </ul>

      <div className="">
				<span>Total Amount</span>
				<span>{totalAmount}</span>
        {hasItems && <button type="button">Order</button>}
			</div>
    </>
  )
}