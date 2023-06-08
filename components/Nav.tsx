"use client"
import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md"
import Link from "next/link"
import { useState } from "react"
const Nav = () => {
  const [dark, setdark] = useState(true)
  return (
    <nav className="w-11/12 h-20 flex flex-row justify-between items-center text-lg font-medium flex-shrink-0 ">
      <Link href="/">
        <h1 className="text-3xl font-bold text-primary">Kitab</h1>
      </Link>
      <div
        className={`flex gap-3 w-max h-12 rounded-lg justify-center items-center sm:hidden`}
      >
        <Link href="/app/">Home</Link>
        <Link href="/app/categories">categories</Link>
        <Link href="/store">Store</Link>
      </div>
      <div className="w-max flex flex-row justify-center items-center gap-4  h-full md:hidden sm:hidden ">
        {dark ? (
          <MdLightMode
            onClick={() => setdark(!dark)}
            size={25}
            className="cursor-pointer flex-shrink-0"
          />
        ) : (
          <MdDarkMode
            onClick={() => setdark(!dark)}
            size={25}
            className="cursor-pointer flex-shrink-0"
          />
        )}

        <p className="w-12 h-12 bg-white rounded-full flex-shrink-0"></p>
      </div>
      <MdMenu className="lg:hidden" />
    </nav>
  )
}
export default Nav
