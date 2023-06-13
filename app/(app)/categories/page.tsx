import PRISMA from "@/lib/prisma"
import Link from "next/link"
const page = async () => {
  const categories = await PRISMA.category
    .findMany({
      include: {
        _count: true,
      },
    })
    .catch((err) => {
      console.log(err)
    })

  return (
    <div className="w-full h-max flex flex-row gap-4 flex-wrap justify-center items-center">
      {categories ? (
        categories.map((category, id) => {
          return (
            <Link
              key={id}
              className="w-56  h-24 p-4 bg-black rounded-xl flex justify-start items-center gap-2"
              href={`/app/categories/${category.id}`}
            >
              <div className="w-14 h-14 rounded-full bg-white"></div>
              <div className="w-max h-14 flex flex-col">
                <p>{category.title}</p>
                <p>{category._count.books} Book</p>
              </div>
            </Link>
          )
        })
      ) : (
        <h1>lol</h1>
      )}
    </div>
  )
}
export default page
