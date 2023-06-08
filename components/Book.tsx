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
  } = data

  return (
    <Link
      href={`/app/books/${slug || "404"}`}
      className="w-40 h-88 sm:w-24 sm:h-max flex flex-col justify-start gap-3 items-center text-sm "
    >
      <Image
        src="/cover.jpg"
        height={100}
        width={100}
        alt="cover"
        className="h-max w-full object-cover  rounded-lg"
      />
      <div className="flex flex-col justify-start h-max w-full items-start">
        <p className="text-md font-semibold sm:text-sm sm:font-light">
          {title}
        </p>
        <Link href={`/app/category/${category.title}`}>
          <p className=" text-xs text-primary">{category.title}</p>
        </Link>
      </div>
    </Link>
  )
}
export default Book
