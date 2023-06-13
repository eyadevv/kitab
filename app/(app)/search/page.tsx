"use client"
import Search from "@/components/Search"
import { useState } from "react"
const Page = () => {
  const [state, setstate] = useState("Search for A Book")
  return (
    <div className="w-full h-max flex flex-col justify-start items-center">
      <Search setstate={setstate} />
      <main className="flex flex-col w-full h-max justify-start items-center">
        <p>{state}</p>
      </main>
    </div>
  )
}
export default Page
