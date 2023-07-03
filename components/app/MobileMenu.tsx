import Link from "next/link"

import { BiLibrary } from "react-icons/bi"
import { AiFillHome, AiFillAppstore, AiOutlineUser } from "react-icons/ai"
const MobileMenu = ({ className }: any) => {
  return (
    <div
      className={`flex h-14 w-11/12 max-w-md flex-shrink-0 items-center  justify-between gap-3 rounded-lg ${className}`}
    >
      <Link
        href="/"
        className="flex flex-col items-center justify-center gap-2 text-xs"
      >
        <AiFillHome size={30} />
        <p>Home</p>
      </Link>
      <Link
        href="/categories"
        className="flex flex-col items-center justify-center gap-2 text-xs"
      >
        <AiFillAppstore size={30} />
        <p>Categories</p>
      </Link>
      <Link
        href="/authors"
        className="flex flex-col items-center justify-center gap-2 text-xs"
      >
        <AiOutlineUser size={30} />
        <p>Authors</p>
      </Link>
      <Link
        href="/library"
        className="flex flex-col items-center justify-center gap-2 text-xs"
      >
        <BiLibrary size={30} />
        <p>Library</p>
      </Link>
    </div>
  )
}
export default MobileMenu
