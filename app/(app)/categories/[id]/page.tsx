import PRISMA from "@/lib/prisma"
import Book from "@/components/Book"
const page = async ({ params }: { params: { id: number } }) => {
  const data = await PRISMA.book
    .findMany({
      where: {
        categoryId: Number(params.id),
      },
      select: {
        category: true,
        title: true,
        slug: true,
        cover: true,
        rate: true,
      },
    })
    .catch((err) => {
      console.log(err)
    })

  return (
    <div>
      lol
      {data?.map((book, id) => {
        return <Book key={id} data={book} />
      })}
    </div>
  )
}
export default page
