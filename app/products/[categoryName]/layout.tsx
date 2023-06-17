export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col items-center justify-between">
      {children}
    </main>
  )
}