// define layout to be shared for pages within shop folders

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen p-10">
      {children}
    </main>
  )
}