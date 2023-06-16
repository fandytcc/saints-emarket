export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <div className="p-4">
     {children}
   </div>
  )
}