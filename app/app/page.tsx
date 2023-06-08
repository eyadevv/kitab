import Section from "@/components/Section"
import PRISMA from "@/lib/prisma"
import { Reload } from "@/components/Error"

const page = async () => {
  const sections = await PRISMA.section
    .findMany({
      include: {
        books: {
          take: 5,
          select: {
            title: true,
            cover: true,
            rate: true,
            slug: true,
            category: true,
          },
        },
      },
    })
    .catch((err) => {
      console.log(err)
    })

  return (
    <div className="w-full h-full flex justify-start items-center">
      {sections?.length > 0 ? (
        <div className="w-full h-full flex flex-col justify-start items-end gap-8 overflow-x-hidden">
          <div className="w-full h-60 bg-white bg-opacity-5  rounded-lg flex-shrink-0 flex flex-col justify-around items-start">
            <div className="flex flex-col">
              <h1 className="lg:text-3xl font-extrabold text-xl">
                A book is a gift you can <br /> open again and again.
              </h1>
              <p className="lg:text-2xl  text-lg font-bold ">
                ― Garrison Keillor
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <button className="bg-amber-900 text-xl lg:p-4 p-2 lg:font-semibold font-normal rounded">
                Claim Discount
              </button>
              <button className="bg-amber-900 text-xl lg:p-4 p-2  lg:font-semibold font-normal rounded">
                Read Free Books
              </button>
            </div>
          </div>
          {sections.map((section, id) => {
            return (
              <Section key={id} name={section.title} data={section.books} />
            )
          })}
        </div>
      ) : (
        <Reload />
      )}
    </div>
  )
}
export default page
