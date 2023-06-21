import { Suspense } from "react"
import dynamic from "next/dynamic"
import { getData as getProductsPerCategory } from "@/app/utils/api"
import { CATEGORIES } from "@/app/utils/const"
import getQueryClient from "@/app/lib/get-query-client"
import { dehydrate, Hydrate } from '@tanstack/react-query'

const ProductList = dynamic(() => import('@/app/components/products/ProductList'))
const Loading = dynamic(() => import('./loading'))


export default async function CategoryProductsPage(
  { params: { categoryName }}: { params: { categoryName: string }}) {

  /** Fetch data in client side using useEffect, useState
    const [productsPerCategory, setProductsPerCategory] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState(null)

    useEffect(() => {
      const fetchProductsPerCategory = async () => {
        const responseData = await getProductsPerCategory(categoryName)
        setProductsPerCategory(responseData)
        setIsLoading(false)
      }
      fetchProductsPerCategory().catch((error) => {
        setIsLoading(false)
        setHttpError(error.message)
      })
    }, [categoryName])

    TODO: use nextJS error.tsx or errorBoundary
    if (httpError) {
      return (
        <section>
          <p>{httpError}</p>
        </section>
      )
    }
  */

  /** Fetch data in server side using fetch API
    const productsPerCategory = await getProductsPerCategory(`${CATEGORIES}/${categoryName}`)
  */
  
    
  /** Prefetch data in server side and pass it to <ProductList/> with react query as state manager
    without props
    do we need ReactQuery? https://tkdodo.eu/blog/you-might-not-need-react-query
    ref: https://tanstack.com/query/latest/docs/react/guides/ssr 
  */

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(
    ["hydrate-productsPerCategory"], 
    () => getProductsPerCategory(`${CATEGORIES}/${categoryName}`))
  const dehydratedState = dehydrate(queryClient)

  console.log(dehydratedState)

  return (
    <div className="flex flex-col items-center justify-between">
      <Suspense fallback={<Loading />}>
        <Hydrate state={dehydratedState}>
          {/* <ProductList products={productsPerCategory}/> */}
          <ProductList />
        </Hydrate>
      </Suspense>
    </div>
  )
}