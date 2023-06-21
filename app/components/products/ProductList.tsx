import { Product } from "@/app/models/product.model";
import ProductItem from "./ProductItem";


export default function ProductList( props: { products: Product[] } ) {
  return (
    <ul className="list-none m-0 p-0">
      {props.products && props.products.map((product: Product) => (
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