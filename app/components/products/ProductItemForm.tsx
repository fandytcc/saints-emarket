'use client'

import { useRef, useState } from "react";
import TextInput from "../ui/TextInput";

interface MealItemFormProps {
  id: string, 
  onAddToCart: (enteredAmountNumber: number) => void
}

export default function MealItemForm(props: MealItemFormProps) {
  const [amountIsValid, setAmountIsValid] = useState(true)
	const amountInputRef = useRef<HTMLInputElement>()
  
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

    if(!amountInputRef) return 

    const enteredAmount = amountInputRef.current?.value ?? ''
		const enteredAmountNumber = +enteredAmount

		if (
			enteredAmount.trim().length === 0 || 
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 5) {
				setAmountIsValid(false)
				return
			}

			props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className="text-right inline-flex" onSubmit={submitHandler}>
        <TextInput label="Amount" ref={amountInputRef} 
          input={{
            id: 'amount_' + props.id, 
            type: 'number', 
            min: '1',
            max: '5', 
            step: '1',
            defaultValue: '1'
          }}/>
				<button 
          className='cursor-pointer p-2 ml-2 border-teal-200 border rounded-lg' 
          type="submit">
          +Add
        </button>
				{!amountIsValid && <p>Please anter a valid amount 1 - 5.</p>}
    </form>
  )
}