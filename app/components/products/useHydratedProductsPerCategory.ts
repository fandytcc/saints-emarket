import { useQuery } from "@tanstack/react-query"
import { getData as getProductsPerCategory } from "@/app/utils/api"
import { CATEGORIES } from "@/app/utils/const"

// custom hook to be shared across multiple components if needed
export default function useHydratedProductsPerCategory(categoryName: string) {
  return useQuery({ 
    queryKey: ['hydrate-productsPerCategory'], 
    queryFn: () => getProductsPerCategory(`${CATEGORIES}/${categoryName}`)
  })
}