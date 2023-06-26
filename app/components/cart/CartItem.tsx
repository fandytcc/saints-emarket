import Card from "../ui/Card"

export interface CartItemProps {
  name: string,
  price: string,
  amount: number, 
  onRemove: React.MouseEventHandler<HTMLButtonElement>,
  onAdd: React.MouseEventHandler<HTMLButtonElement>
}

export default function CartItem(props: CartItemProps) {
  return (
    <Card>
      <li className="p-6 mx-4">
        <div className="grid grid-cols-4">
          <h3 className='text-xl font-medium col-span-2'>{props.name}</h3>
          <span>€{props.price} x {props.amount}</span>
          <div>
            <button className='cursor-pointer px-2 mr-2 border-teal-200 border rounded' 
              onClick={props.onRemove}>−</button>
            <button className='cursor-pointer px-2 border-teal-200 border rounded' 
              onClick={props.onAdd}>+</button>
            </div>
        </div>
      </li>
    </Card>
  )
}