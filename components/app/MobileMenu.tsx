import Link from "next/link"
import { BiLibrary } from "react-icons/bi"
import { AiFillHome, AiFillAppstore, AiOutlineUser } from "react-icons/ai"
const MobileMenu = () => {
  return (
    <div className="hidden sm:visible bg-black sm:flex gap-3 w-11/12  h-12 rounded-lg justify-between items-center flex-shrink-0 ">
      <Link
        href="/home"
        className="flex flex-col justify-center items-center text-xs gap-2"
      >
        <AiFillHome size={30} />
        <p>Home</p>
      </Link>
      <Link
        href="/categories"
        className="flex flex-col justify-center items-center text-xs gap-2"
      >
        <AiFillAppstore size={30} />
        <p>Categories</p>
      </Link>
      <Link
        href="/authors"
        className="flex flex-col justify-center items-center text-xs gap-2"
      >
        <AiOutlineUser size={30} />
        <p>Authors</p>
      </Link>
      <Link
        href="/library"
        className="flex flex-col justify-center items-center text-xs gap-2"
      >
        <BiLibrary size={30} />
        <p>Library</p>
      </Link>
    </div>
  )
}
export default MobileMenu
