import Link from "next/link";
import {
  AiOutlineAppstore,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { Flame } from "lucide-react";
const MobileMenu = ({ className }: any) => {
  return (
    <div
      className={`flex h-max w-11/12 max-w-md flex-shrink-0 items-center  justify-between gap-3 py-2 rounded-lg ${className}`}
    >
      <Link
        href="/"
        className="flex flex-col items-center justify-center gap-2 text-xs"
      >
        <AiOutlineHome size={30} />
        <p>Home</p>
      </Link>
      <Link
        href="/categories"
        className="flex flex-col items-center justify-center gap-2 text-xs"
      >
        <AiOutlineAppstore size={30} />
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
        href="/top"
        className="flex flex-col items-center justify-center gap-2 text-xs"
      >
        <Flame size={30} />
        <p>Top</p>
      </Link>
    </div>
  );
};
export default MobileMenu;
