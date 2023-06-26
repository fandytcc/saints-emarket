import React from "react"

interface TextInputProps {
  label?: string,
  input: React.HTMLProps<HTMLInputElement>
}

export type Ref = HTMLInputElement | undefined


// eslint-disable-next-line react/display-name
const TextInput = React.forwardRef<Ref, TextInputProps>(({ label, ...props} , ref) => {
  return (
    <div className="flex items-center">
      <label className="font-bold mr-4" htmlFor={props.input.id}>
        {label}
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