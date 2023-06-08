import Link from "next/link"
const Menu = () => {
  return (
    <div
      className={`flex flex-row flex-nowrap justify-center items-center gap-3 w-full h-full `}
    >
      <div
        className={`flex gap-3 w-max h-12 rounded-lg justify-center items-center`}
      >
        <Link href="/app/">Home</Link>
        <Link href="/app/books">Books</Link>
        <Link href="/store">Store</Link>
      </div>
      <input
        type="search"
        name=""
        id=""
        className={`rounded-md indent-2 text-black placeholder:text-black h-12 p-0 w-56`}
        placeholder="Search"
      />
    </div>
  )
}
export default Menu
