'use client'

import Card from "@/app/components/ui/Card"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { Suspense } from "react"

const Loading = dynamic(() => import('../loading'))

async function getProduct(id: string) {
  const res = await fetch(`https://esaintsmarket.onrender.com/products/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function ProductDetailPage({
  params: { categoryName, productId }
}: { params: { categoryName: string, productId: string }}) {
  const router = useRouter()

  const product = await getProduct(productId)

  return (
    <>
      <button 
        className="p-2 bg-teal-500 rounded mb-3" type="button"
        onClick={() => router.back()}>
        Go back
      </button>

      <h1 className="text-lg font-bold my-4">Product detail page </h1>

      <Suspense fallback={<Loading />}>
        <Card>
          <img src={product.image} alt={product.name} width="500" height="75"/>
          <div className="p-2 my-2 bg-teal-200 rounded-lg w-fit">{product.category}</div>
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="py-2">€{product.price}</p>
          <p>{product.description}</p>
        </Card>
      </Suspense>
    </>
  )
}