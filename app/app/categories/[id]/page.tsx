import PRISMA from "@/lib/prisma"
import Book from "@/components/Book"
const page = async ({ params }: { params: { id: number } }) => {
  const data = await PRISMA.book.findMany({
    where: {
      categoryId: Number(params.id),
    },
  })
  return (
    <div>
      {data.length > 0 ? (
        data.map((book, id) => {
          return (
            <Book
              key={id}
              title={book.title}
              price={book.price}
              rate={book.rate}
            />
          )
        })
      ) : (
        <h1>No Books Found</h1>
      )}
    </div>
  )
}
export default page
