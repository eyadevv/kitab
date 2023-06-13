import PRISMA from "@/lib/prisma"
import Grid from "@/components/Grid"
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
    <div className="w-full h-full flex flex-col justify-start items-center gap-3">
      <Grid data={books} />
    </div>
  )
}
export default page
