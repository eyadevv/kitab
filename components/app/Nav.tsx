"use client"
import { BiMoon, BiSun, BiSearch } from "react-icons/bi"
import Link from "next/link"
import { useState } from "react"
import MobileMenu from "@/components/app/MobileMenu"
const Nav = () => {
  const [dark, setdark] = useState(true)
  return (
    <nav className="flex h-20 w-11/12 flex-shrink-0 flex-row items-center justify-between text-lg font-medium ">
      <Link href="/">
        <h1 className="text-3xl font-bold text-primary">Kitab</h1>
      </Link>
      <div className="flex h-12 w-2/3 flex-shrink items-center justify-center gap-3 rounded-lg sm:hidden">
        <MobileMenu className="bg-transparent sm:hidden md:hidden" />
      </div>

      <div className="flex w-max flex-row items-center justify-center gap-2 ">
        <BiSearch />

        {dark ? (
          <BiSun
            onClick={() => setdark(!dark)}
            size={25}
            className="flex-shrink-0 cursor-pointer"
          />
        ) : (
          <BiMoon
            onClick={() => setdark(!dark)}
            size={25}
            className="flex-shrink-0 cursor-pointer"
          />
        )}
        <p className="h-10 w-10 flex-shrink-0 rounded-full bg-white"></p>
      </div>
    </nav>
  )
}
export default Nav
