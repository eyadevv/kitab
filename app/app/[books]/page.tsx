import PRISMA from "@/lib/prisma"
import Book from "@/components/Book"
import Grid from "@/components/Grid"
const page = async ({ params }: { params: string }) => {
  var books = await PRISMA.book.findMany({
    select: {
      title: true,
      slug: true,
      cover: true,
      rate: true,
      price: true,
    },
  })
  return (
    <div className="w-full h-5/6 ">
      <Grid style={null}>
        {books
          ? books.map((book, id) => {
              return <Book key={id} data={book} />
            })
          : null}
      </Grid>
    </div>
  )
}
export default page
