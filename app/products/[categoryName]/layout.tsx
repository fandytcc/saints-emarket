'use client'

import { LinkProps, Navigation } from "@/app/components/ui/Navigation"
import { useParams, useRouter } from "next/navigation"

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const params = useParams()
  const category = params.categoryName

  const navLinks = [
    { href: '/', name: 'Home' },
    { href: `products/${category.toLowerCase()}`, name: category }
  ]

  return (
    <main>
      <div className="inline-flex gap-4">
          {navLinks?.map((link: LinkProps, index: number) => {
            const show = index 

            return (
              <Navigation 
                link={link}
                key={link.name}
                className=''
                >
                <h2 className="mb-3 text-sm font-semibold">
                  {link.name.toLocaleUpperCase()} 
                  {
                    (index < navLinks.length -1) && 
                    <span 
                      className="ml-3 text-black">/</span>
                  }
                </h2>
              </Navigation>
              )
            })
          }
      </div>
      <h1 className="text-3xl font-bold">
        {category.toLocaleUpperCase()}
      </h1>
      {children}
    </main>
  )
}