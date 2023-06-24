'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ReactNode } from 'react'

export type LinkProps = {
  href: string, 
  name: string
}
 
export function Navigation({ link, children, className }: { link: LinkProps, children?: ReactNode, className: string }) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(`/${link.href}`)
  const activeClasses = isActive ? 'text-blue-700' : 'text-black'
 
  return (
      <Link
        className={`${className} ${activeClasses}`}
        href={link.href}
        key={link.name}
      >
        { children }
      </Link>
    )
}