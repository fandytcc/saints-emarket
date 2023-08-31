'use client'

import { Product } from "@/app/models/product.model";
import ProductItem from "./ProductItem";
import { useQuery } from "@tanstack/react-query";
import { getData as getProductsPerCategory } from "@/app/utils/api"
import { CATEGORIES } from "@/app/utils/const"
import { useParams } from "next/navigation";
import Loading from "@/app/products/[categoryName]/loading";
import useHydratedProductsPerCategory from "./useHydratedProductsPerCategory";

/** Client side component using hydrated state from react query
 *  without passing props: { products: Product[] }
 */

export default function ProductList() {
  const { categoryName } = useParams()

  const { data, isLoading, isFetching, error }  = useHydratedProductsPerCategory(categoryName)

  // const { data, isLoading, isFetching, error } = useQuery({ 
  //   queryKey: ['hydrate-productsPerCategory'], 
  //   queryFn: () => getProductsPerCategory(`${CATEGORIES}/${categoryName}`)
  // })

  // const { data: otherData } = useQuery({
  //   queryKey:['products'],
  //   queryFn: () => getProductsPerCategory(`${CATEGORIES}/${categoryName}`)
  // })

  // console.log(otherData, 'data from useQuery products query key')

  if (isLoading || isFetching) {
    return (<Loading />)
  }

  if (error) {
    return (
      <div className="text-3xl font-bold">
        Oops.. something went wrong from react query error handler
      </div>
    )
  }
  
  return (
    <ul className="list-none m-0 p-0">
      {data?.map((product: Product) => (
        <ProductItem
          key={product.id}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          id={product.id}
        />
      ))}
    </ul>
  )
}