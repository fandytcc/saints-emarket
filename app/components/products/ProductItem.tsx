'use client'

import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import Card from '../ui/Card'

export default function ProductItem(props: any) {
  const router = useRouter()

  const { categoryName } = useParams()

  return (
    <Card>
      <li className="p-4 mx-4">
          <div className='flex flex-row justify-around'>
            <img src={props.image} alt={props.name} width="200" height="75" className='object-cover'/>
            {/* <Image className="relative" 
                src={props.image} 
                alt={props.name}
                width={180}
                height={37}
                priority/> */}
            <div className='p-4'>
              <h3 className='text-xl text-black'>{props.name}</h3>
              <p>€{props.price}</p>
              <p>{props.category}</p>
            </div>
            <div className='flex items-end'>
              <button className='cursor-pointer p-3 bg-teal-500 rounded-lg'
                type="button" 
                onClick={() => router.push(`/products/${categoryName}/${props.id}`)}>
                Show Details
              </button>
            </div>
          </div>
      </li>
    </Card>
  )
}