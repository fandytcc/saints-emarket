import CartItem from "./CartItem";

export default function CartList(props: any) {
  return (
    <ul className="list-none m-0 p-0">
      {props.products.map((item: any) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.id}
        />
      ))}
    </ul>
  )
}