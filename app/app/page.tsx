import PRISMA from "@/lib/prisma"
import { Reload } from "@/components/Error"
import Grid from "@/components/Grid"
import Search from "@/components/Search"
const page = async () => {
  const books = await PRISMA.book
    .findMany({
      take: 25,
      select: {
        title: true,
        cover: true,
        rate: true,
        slug: true,
        author: {
          select: {
            name: true,
          },
        },
        category: {
          select: {
            title: true,
          },
        },
      },
    })
    .catch((err) => {
      console.log(err)
    })
  console.log(books)

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-3">
      <Search />
      <Grid data={books} />
    </div>
  )
}
export default page
