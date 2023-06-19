'use client'

import { useContext } from "react";
import CartIcon from "../cart/CartIcon";
import CartContext from "@/app/store/cart-context";
import Link from "next/link";
import { CartInfo } from "@/app/models/cart-info.model";

export default function HeaderCartButton() {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce(
    (curNumber: number, item: CartInfo) => {
      return curNumber + item.amount
    }, 0)
  
  return (
    <Link href="/cart" className='p-2 text-3xl'> 
      <div className="inline-flex gap-3">
        <CartIcon/>
        <span className="text-lg">Your Cart</span>
        <span className="text-lg">
            ({numberOfCartItems})
        </span>
      </div>
    </Link>
  )
}