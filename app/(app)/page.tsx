import PRISMA from "@/lib/prisma"
import Grid from "@/components/Grid"
import { Reload } from "@/components/Error"

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

  return (
    <div className="w-full h-full flex justify-center items-start gap-3">
      {books ? <Grid data={books} /> : <Reload />}
    </div>
  )
}
export default page
