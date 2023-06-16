import Card from "../ui/Card"

export default function CartItem(props: any) {
  return (
    <Card>
      <li className="p-4 mx-4">
        <div className='flex flex-row'>
          <div className='p-6 text-center'>
            <h3 className='text-xl text-black'>{props.name}</h3>
            <p>€{props.price}</p>
            <span>x {props.amount}</span>
          </div>
          <div>
            <button className='cursor-pointer p-3 bg-teal-500 rounded-lg' 
              onClick={props.onRemove}>−</button>
            <button className='cursor-pointer p-3 bg-teal-500 rounded-lg' 
              onClick={props.onAdd}>+</button>
            </div>
          </div>
      </li>
    </Card>
  )
}