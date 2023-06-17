// define layout to be shared for pages within shop folders

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="">
      {children}
    </main>
  )
}