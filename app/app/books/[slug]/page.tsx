import { NotFoundBook } from "@/components/Error"
import PRISMA from "@/lib/prisma"
import Link from "next/link"
import { FaDownload, FaShoppingBag } from "react-icons/fa"
import Image from "next/image"
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
        <div className="w-full h-max min-h-[70vh] rounded-xl flex lg:flex-row justify-start items-center gap-4 flex-shrink-0 flex-col flex-nowrap ">
          <div className="lg:h-80 h-56 flex-shrink-0 flex flex-col justify-center items-center">
            <Image
              src="/cover.jpg"
              width={999}
              height={999}
              alt="cover"
              className="w-full h-full rounded-lg object-fill"
            />
          </div>
          <div className="lg:w-2/3 lg:h-5/6 h-max flex flex-col justify-between items-center gap-4">
            <div className="w-full flex flex-col justify-start items-start ">
              <div className="w-full h-max flex flex-row justify-between items-center flex-wrap whitespace-nowrap">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p>Self Help</p>
                <p>2022</p>
              </div>
              <Link href={`/app/authors/${author.name}`}>{author.name}</Link>
            </div>
            <div className="w-full h-max">
              <p>{description}</p>
            </div>
            <div className="w-full h-max flex flex-row justify-between items-center flex-wrap gap-2 ">
              <div className="grid grid-flow-row grid-cols-4 sm:grid-cols-2 gap-2  ">
                <Item title="language" content={language} />
                <Item title="Downloads" content={downloads.toString()} />
                <Item title="Pages" content={pages.toString()} />
                <Item title="Type" content={type} />
              </div>
              <div className="w-full flex-shrink flex justify-center items-center">
                {/* <Stars rating={rate} /> */}
              </div>
            </div>

            <div className="w-full h-max flex flex-col gap-2 justify-center items-center align-bottom ">
              {price === "free" ? (
                <button className="text-xl font-bold bg-primary rounded-full px-6 py-4 flex flex-row justify-center items-center gap-2">
                  Download
                </button>
              ) : null}
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

const Item = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-1">
      <p>{title}</p>
      <p className="font-bold">{content}</p>
    </div>
  )
}
