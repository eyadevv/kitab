import Link from "next/link"
import Image from "next/image"
const Book = ({ id, data }: any) => {
  const {
    title,
    slug,
    cover,
    rate,
    category,
  }: {
    title: string
    slug: string
    cover: string
    rate: number
    category: any
  } = data || {}

  return (
    <div className="h-88 flex w-40 flex-col items-center justify-start gap-3 text-sm sm:h-max sm:w-24 ">
      <Link href={`/books/${slug}`}>
        <Image
          src="/cover.jpg"
          height={100}
          width={100}
          alt="cover"
          className="h-max w-full rounded-lg  object-cover"
        />
      </Link>

      <p className="text-md font-semibold sm:text-sm sm:font-light">{title}</p>
      <Link href={`/categories/${category.title}`}>
        <p className=" text-xs text-primary">{category?.title}</p>
      </Link>
    </div>
  )
}
export default Book
