"use client"
import { useState } from "react"
import { MdSearch } from "react-icons/md"
const Search = () => {
  const [query, setquery] = useState("")
  const handleSearch = async (query) => {
    const response = await fetch("/api/search", {
      method: "post",
      body: query,
    })
    console.log(response)
  }

  return (
    <div className="w-full h-max py-4  rounded-lg flex-shrink-0 flex flex-col justify-center items-center">
      <div className="w-full h-16 sm:h-12 flex justify-center items-center gap-2 ">
        <input
          type="Search"
          className="w-full max-w-[480px] h-full rounded-xl indent-4 placeholder:text-black  text-black  "
          placeholder="Search"
          onChange={(e) => setquery(e.target.value)}
          value={query}
        />
        <button
          className="h-full flex-shrink-0 w-16 rounded-xl bg-emerald-900 flex justify-center items-center"
          onClick={() => handleSearch(query)}
        >
          <MdSearch size={35} />
        </button>
      </div>
    </div>
  )
}
export default Search
