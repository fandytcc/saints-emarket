'use client'

import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import Card from '../ui/Card'
import MealItemForm from './ProductItemForm'
import { useContext } from 'react'
import CartContext from '@/app/store/cart-context'

export default function ProductItem(props: any) {
  const router = useRouter()
  
  const { categoryName } = useParams()

  const cartCtx = useContext(CartContext)

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id: props.id, 
      name: props.name, 
      amount, 
      price: props.price
    })
  }

  return (
    <Card>
      <li className="p-4">
          <div className='flex flex-row justify-around'>
              <Image className="relative object-cover" 
                src={props.image} 
                alt={props.name}
                width={200}
                height={75}
                priority/>
            <div className='p-4 w-1/2'>
              <h3 className='text-xl text-black'>{props.name}</h3>
              <p>€{props.price.toFixed(2)}</p>
              <p>{props.category}</p>
            </div>
          </div>
          
          <div className='flex flex-row justify-between items-center'>
            <MealItemForm onAddToCart={addToCartHandler}/>

            <button className='cursor-pointer p-3 bg-teal-500 rounded-lg'
                type="button" 
                onClick={() => router.push(`/products/${categoryName}/${props.id}`)}>
                Show Details
              </button>
          </div>
      </li>
    </Card>
  )
}