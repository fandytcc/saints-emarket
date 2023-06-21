import React from "react"

// eslint-disable-next-line react/display-name
const TextInput = React.forwardRef((props: any, ref: any) => {
  return (
    <div className="flex items-center">
      <label className="font-bold mr-4" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input 
        className="w-12 rounded-md border-gray-200 pl-2" 
        ref={ref} 
        {...props.input}
      />
    </div>
  )
})

export default TextInput