import { NotFoundBook } from "@/components/Error"
import PRISMA from "@/lib/prisma"
import Link from "next/link"
import { FaDownload, FaShoppingBag } from "react-icons/fa"
import Stars from "@/components/Stars"
import Image from "next/image"
import Grid from "@/components/Grid"
const page = async ({ params }: { params: { slug: string } }) => {
  const book = await PRISMA.book
    .findUnique({
      where: {
        slug: params.slug,
      },
      include: {
        author: true,
      },
    })
    .catch((err) => {
      console.log(err)
    })
  if (book?.id) {
    const {
      title,
      author,
      language,
      downloads,
      pages,
      type,
      rate,
      price,
      description,
    } = book

    return (
      <div className="w-full h-full flex flex-col justify-between items-start gap-4 overflow-scroll ">
        <div className="w-full h-[80vh] rounded-xl flex flex-row justify-start items-center gap-4 flex-shrink-0 ">
          <div className="w-1/4 h-full flex-shrink-0 flex flex-col justify-center items-center">
            <Image
              src="/cover.jpg"
              width={999}
              height={999}
              alt="cover"
              className="w-full h-full rounded-lg object-fill"
            />
          </div>
          <div className="w-2/3 h-5/6 flex flex-col justify-between items-center">
            <div className="w-full flex flex-col justify-start items-start">
              <div className="w-full h-max flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                  <h1 className="text-3xl font-bold">{title}</h1>
                  {rate}
                </div>
                <p>Self Help</p>
                <p>2022</p>
              </div>
              <Link href={`/app/authors/${author.slug}`}>{author.name}</Link>
            </div>
            <div className="w-full h-max">
              <p>{description}</p>
            </div>
            <div className="w-full h-max flex flex-row justify-between items-center flex-wrap gap-2">
              <div className="flex flex-row gap-2">
                <Item title="language" content={language} />
                <Item title="Downloads" content={downloads} />
                <Item title="Pages" content={pages} />
                <Item title="Type" content={type} />
              </div>
              <div className="w-full flex-shrink flex justify-center items-center">
                <Stars rating={rate} />
              </div>
            </div>

            <div className="w-full h-max flex flex-col gap-2 justify-center items-center align-bottom ">
              <button className="text-xl font-bold bg-indigo-900 rounded-full px-6 py-4 flex flex-row justify-center items-center gap-2">
                {price === "free" ? "Download" : "Order Now"}
                {price === "free" ? <FaDownload /> : <FaShoppingBag />}
              </button>
              {price === "free" ? null : <p>Secure Payments</p>}
            </div>
          </div>
        </div>

        <div className="w-full h-44 flex-shrink-0 bg-white"></div>
      </div>
    )
  } else {
    return <NotFoundBook />
  }
}
export default page

const Item = ({ title, content }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-1">
      <p>{title}</p>
      <p className="font-bold">{content}</p>
    </div>
  )
}
