"use client"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import Link from "next/link"
import { useState } from "react"
import Menu from "./Menu"
const Nav = () => {
  const [dark, setdark] = useState(true)
  return (
    <nav className="w-11/12 h-20 flex flex-row justify-between items-center text-lg font-medium flex-shrink-0 ">
      <Link href="/">
        <h1 className="text-3xl font-bold">Kitab</h1>
      </Link>
      <Menu />
      <div className="w-max flex flex-row justify-center items-center gap-4  h-full ">
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
    </nav>
  )
}
export default Nav
