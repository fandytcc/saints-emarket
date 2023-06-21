import { Suspense } from "react"
import dynamic from "next/dynamic"
import { getData as getProductsPerCategory } from "@/app/utils/api"
import { CATEGORIES } from "@/app/utils/const"

const ProductList = dynamic(() => import('@/app/components/products/ProductList'))
const Loading = dynamic(() => import('./loading'))

export default async function CategoryProductsPage(
  { params: { categoryName }}: { params: { categoryName: string }}) {

  // Codes to fetch data in client side
  // const [productsPerCategory, setProductsPerCategory] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  // const [httpError, setHttpError] = useState(null)

  // useEffect(() => {
  //   const fetchProductsPerCategory = async () => {
  //     const responseData = await getProductsPerCategory(categoryName)
  //     setProductsPerCategory(responseData)
  //     setIsLoading(false)
  //   }
  //   fetchProductsPerCategory().catch((error) => {
  //     setIsLoading(false)
  //     setHttpError(error.message)
  //   })
  // }, [categoryName])

  // TODO: use nextJS error.tsx or errorBoundary
  // if (httpError) {
  //   return (
  //     <section>
  //       <p>{httpError}</p>
  //     </section>
  //   )
  // }

  const productsPerCategory = await getProductsPerCategory(`${CATEGORIES}/${categoryName}`)
  
  return (
    <div className="flex flex-col items-center justify-between">
      <Suspense fallback={<Loading />}>
        <ProductList products={productsPerCategory}/>
      </Suspense>
    </div>
  )
}