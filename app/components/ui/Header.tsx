import Link from "next/link";
import HeaderCartButton from "./HeaderCartButton";

export default function Header() {
  return (
    <header className="fixed z-10 w-full items-center bg-white justify-between font-mono text-sm lg:flex py-5 px-24">
      <Link href="/" className='text-3xl font-bold'>
        Saint eMarket
      </Link>
      <HeaderCartButton />
    </header>
  )
}