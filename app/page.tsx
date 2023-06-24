import Image from 'next/image'
import { LinkProps, Navigation } from './components/ui/Navigation'
import { getData as getCategories } from "@/app/utils/api"
import { CATEGORIES } from './utils/const'
import { Suspense } from 'react'
import Loading from './products/[categoryName]/loading'

export default async function Home() {
  const categories = await getCategories(CATEGORIES)

  const sortedCategories = categories?.sort((a: string, b: string) => a.localeCompare(b))

  const navLinks = sortedCategories?.map((category: string) => {
    return { href: `products/${category.toLowerCase()}`, name: category }
  })

  return (
      <main className="flex min-h-screen flex-col items-center justify-around">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Suspense fallback={<Loading />}>
            {navLinks?.map((link: LinkProps) => {
              return (
                <Navigation 
                  link={link}
                  key={link.name} 
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                  
                  <h2 className="mb-3 text-2xl font-semibold">
                    {link.name}{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Find in-depth information about {link.name}.
                  </p>
                </Navigation>)
              })
            }
          </Suspense>
        </div>
      </main>
  )
}
