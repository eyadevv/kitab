import Link from "next/link"
import { BiCategory, BiHome, BiUser, BiLibrary } from "react-icons/bi"
const MobileMenu = () => {
  return (
    <div className="hidden sm:visible bg-black sm:flex gap-3 w-11/12  h-12 rounded-lg justify-between items-center flex-shrink-0 ">
      <Link
        href="/"
        className="flex flex-col justify-center items-center text-xs"
      >
        <BiHome size={35} />
        <p>Home</p>
      </Link>
      <Link
        href="/categories"
        className="flex flex-col justify-center items-center text-xs"
      >
        <BiCategory size={35} />
        <p>Categories</p>
      </Link>
      <Link
        href="/authors"
        className="flex flex-col justify-center items-center text-xs"
      >
        <BiUser size={35} />
        <p>Trending</p>
      </Link>
      <Link
        href="/library"
        className="flex flex-col justify-center items-center text-xs"
      >
        <BiLibrary size={35} />
        <p>Library</p>
      </Link>
    </div>
  )
}
export default MobileMenu
