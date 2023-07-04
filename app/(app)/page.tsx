import PRISMA from "@/lib/prisma"
import Grid from "@/components/app/Grid"
const page = async () => {
  const books: any = await PRISMA.book
    .findMany({
      take: 25,
      select: {
        name: true,
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
            name: true,
          },
        },
      },
    })
    .then((res) => res)
    .catch((err) => null )

  return (
    <div className="flex h-full w-11/12 items-start justify-center gap-3 ">
      <Grid data={books} type='book' />
    </div>
  )
}
export default page
