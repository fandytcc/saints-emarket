'use client'

import { usePathname, useRouter } from "next/navigation"

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const categoryName = pathname.split('/')[2]

  return (
    <main>
      <button 
        className="p-2 bg-teal-500 rounded mb-3" type="button"
        onClick={() => router.back()}>
        Go back
      </button>
      <h1 className="text-3xl font-bold">
        {categoryName.toLocaleUpperCase()}
      </h1>
      {children}
    </main>
  )
}