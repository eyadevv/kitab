import { NotFoundBook } from "@/components/app/Error"
import PRISMA from "@/lib/prisma"
import Link from "next/link"
import Image from "next/image"
import { FaDownload } from "react-icons/fa"
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
      <div className="flex h-full w-full flex-col items-start justify-between gap-4 overflow-scroll ">
        <div className="flex h-max min-h-[70vh] w-full flex-shrink-0 flex-col flex-nowrap items-center justify-start gap-4 rounded-xl lg:flex-row ">
          <div className="flex h-96 flex-shrink-0 flex-col items-center justify-center sm:h-[120vw] sm:w-[90vw]">
            <Image
              src="/cover.jpg"
              width={999}
              height={999}
              alt="cover"
              className="h-full w-full rounded-lg object-fill"
            />
          </div>
          <div className="flex h-max flex-col items-center justify-between gap-4 sm:w-11/12 lg:h-5/6 lg:w-2/3">
            <div className="flex w-full flex-col items-start justify-start ">
              <div className="flex h-max w-full flex-row flex-wrap items-center justify-between whitespace-nowrap">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p>Self Help</p>
                <p>2022</p>
              </div>
              <Link href={`/app/authors/${author.name}`}>{author.name}</Link>
            </div>
            <div className="h-max w-full">
              <p>{description}</p>
            </div>
            <div className="flex h-max w-full flex-row flex-wrap items-center justify-between gap-2">
              <div className="grid h-max w-full grid-flow-row grid-cols-4 gap-4 sm:grid-cols-2  ">
                <Item title="language" content={language} />
                <Item title="Downloads" content={downloads.toString()} />
                <Item title="Pages" content={pages.toString()} />
                <Item title="Type" content={type} />
              </div>
              <div className="flex w-full flex-shrink items-center justify-center">
                {/* <Stars rating={rate} /> */}
              </div>
            </div>

            <div className="flex h-max w-full flex-col items-center justify-center gap-2 align-bottom ">
              <button className="flex flex-row items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-xl font-bold">
                Download
                <FaDownload />
              </button>
            </div>
          </div>
        </div>

        {/* <div className="w-full h-44 flex-shrink-0 bg-white my-20"></div> */}
      </div>
    )
  } else {
    return <NotFoundBook />
  }
}
export default page

const Item = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <p>{title}</p>
      <p className="font-bold">{content}</p>
    </div>
  )
}
