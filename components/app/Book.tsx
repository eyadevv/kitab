import Link from "next/link"
import Image from "next/image"
const Book = ({ id, data }: any) => {
  const {
    name,
    slug,
    cover,
    rate,
    category,
  }: {
    name: string
    slug: string
    cover: string
    rate: number
    category: any
  } = data || {}

  return (
    <div className="h-88 flex w-40 flex-col items-center justify-center gap-3  rounded-xl bg-white bg-opacity-5 p-2  text-sm sm:h-max sm:w-24 ">
      <Link
        href={`/books/${slug}`}
        className="flex h-full w-full items-center justify-center"
      >
        <Image
          src="/cover.jpg"
          height={100}
          width={128}
          alt="cover"
          className="h-max w-32 rounded-lg  object-cover"
        />
      </Link>

      <p className="text-md whitespace-nowrap font-semibold sm:text-xs sm:font-light">
        {name.length <= 15 ? name : name.slice(0, 16) + ".."}
      </p>
      <Link href={`/categories/${category.name}`}>
        <p className="text-xs text-primary">{category?.name}</p>
      </Link>
    </div>
  )
}
export default Book
