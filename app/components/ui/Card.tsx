export default function Card(props: any) {
  return (
    <div className="p-4 shadow-md bg-white rounded-2xl my-2">{props.children}</div>
  )
}