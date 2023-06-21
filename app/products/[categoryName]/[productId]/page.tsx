import Card from "@/app/components/ui/Card"
import Image from 'next/image'
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { getData as getProduct } from "@/app/utils/api"
import { PRODUCTS } from "@/app/utils/const"

const Loading = dynamic(() => import('../loading'))

export default async function ProductDetailPage({
  params: { categoryName, productId }
}: { params: { categoryName: string, productId: string }}) {

  // Codes to fetch data in client side
  // const initialProductState = { name: '', image: '', category: '', price: 0, description: ''}
  // const [product, setProduct] = useState(initialProductState)

  // useEffect(() => {
  //   const fetchProduct = async () => {
  // const responseData = await getProduct(productId)
  //     setProduct(responseData)
  //   }
  //   fetchProduct()
  // },[productId])

  const product = await getProduct(`${PRODUCTS}/${productId}`)
  // Fetch data in server side
  console.log(product)

  return (
    <>
     <div className="flex flex-col items-center justify-between">
      <Suspense fallback={<Loading />}>
        <Card>
          <Image 
              src={product.image} 
              alt={product.name}
              width={500}
              height={75}
              priority />
          <div className="p-2 my-2 bg-teal-200 rounded-lg w-fit">
            {product.category}
          </div>
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="py-2">€{product.price}</p>
          <p>{product.description}</p>
        </Card>
      </Suspense>
    </div>
    </>
  )
}