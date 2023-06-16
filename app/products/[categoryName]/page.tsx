'use client'

import { useRouter } from "next/navigation"
import { Suspense } from "react"
import dynamic from "next/dynamic"

const ProductList = dynamic(() => import('@/app/components/products/ProductList'))
const Loading = dynamic(() => import('./loading'))

async function getProductsPerCategory(categoryName: string) {
  if (!categoryName) return 
  
  const res = await fetch(`https://esaintsmarket.onrender.com/categories/${categoryName}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()

}

export default async function CategoryProductsPage(
  { params: { categoryName }}: { params: { categoryName: string }}) {
  const router = useRouter()

  const productsPerCategory = await getProductsPerCategory(categoryName)

  return (
    <>
    <div>
      <button 
        className="p-2 bg-teal-500 rounded mb-3" type="button" 
        onClick={() => router.back()}>
        Go back
      </button>

      <h1 className="text-3xl font-bold">
        {categoryName.toLocaleUpperCase()}
      </h1>
      <Suspense fallback={<Loading />}>
        <ProductList products={productsPerCategory}/>
      </Suspense>
      </div>
    </>
  )
}