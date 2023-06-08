"use client"
import { MdSearch } from "react-icons/md"
const Search = () => {
  return (
    <div className="w-full h-max py-4  rounded-lg flex-shrink-0 flex flex-col justify-center items-center">
      <div className="w-full h-16 sm:h-12 flex justify-center items-center gap-2 ">
        <input
          type="Search"
          className="w-full max-w-[480px] h-full rounded-xl indent-4 placeholder:text-black  text-black  "
          placeholder="Search"
        />
        <button className="h-full flex-shrink-0 w-16 rounded-xl bg-emerald-900 flex justify-center items-center">
          <MdSearch size={35} />
        </button>
      </div>
    </div>
  )
}
export default Search
