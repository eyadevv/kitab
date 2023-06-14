import PRISMA from "@/lib/prisma"
import Book from "@/components/Book"
import { Reload } from "@/components/Error"
import Grid from "@/components/Grid"
const page = async ({ params }: { params: { id: number } }) => {
  const category = await PRISMA.category
    .findUnique({
      where: {
        id: Number(params.id),
      },
      include: {
        _count: true,
        books: {
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

  console.log(category)
  return (
    <div className="w-11/12 flex flex-col justify-start items-center">
      <div className="w-full h-10  flex flex-row justify-start items-center gap-4 ">
        <h1 className="text-xl font-bold">{category?.title}:</h1>
        <p>{category?._count.books} Books</p>
      </div>
      {category?.books.length === 0 ? (
        <p>No Books in This Category</p>
      ) : (
        <Grid data={category?.books} />
      )}
    </div>
  )
}
export default page
