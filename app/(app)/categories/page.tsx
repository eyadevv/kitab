import { Reload } from "@/components/app/Error"
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
    <div className="flex h-max w-full flex-row flex-wrap items-center justify-center gap-4 ">
      {categories?.map((category, id) => {
        return (
          <Link
            key={id}
            className="flex h-24 w-56 items-center justify-start gap-2 rounded-xl bg-red-900 bg-opacity-10 p-4"
            href={`/categories/${category.id}`}
          >
            <div className="flex h-14 w-max flex-col">
              <p>{category.title}</p>
              <p>{category._count.books} Book</p>
            </div>
          </Link>
        )
      }) || <Reload />}
    </div>
  )
}
export default page
