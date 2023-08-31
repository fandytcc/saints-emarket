import './globals.css'
import { Inter } from 'next/font/google'
import CartProvider from './store/CartProvider'
import Header from './components/ui/Header'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saints emarket',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CartProvider>
        <body className={inter.className}>
          <Header />
          <div className='bg-teal-50 px-24 top-24 relative pt-4 min-h-screen'>
            <Providers>{children}</Providers>
          </div>
        </body>
      </CartProvider>
    </html>
  )
}
