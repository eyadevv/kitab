import Link from "next/link"
import Image from "next/image"
import Stars from "./Stars"
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
      className="w-40 h-88 flex flex-col justify-start gap-3 items-center text-sm bg-black "
    >
      <Image
        src="/cover.jpg"
        height={100}
        width={100}
        alt="cover"
        className="h-max w-full object-cover  rounded-lg"
      />
      <div className="flex flex-col justify-start h-max w-full items-start">
        <p className="text-md font-semibold">{title}</p>
        {/* <p className="font-light">{category}</p> */}
        <Stars rating={rate} />
      </div>
    </Link>
  )
}
export default Book
