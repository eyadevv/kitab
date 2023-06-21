import PRISMA from "@/lib/prisma"
import Grid from "@/components/app/Grid"
import { Reload } from "@/components/app/Error"
import Link from "next/link"
const page = async () => {
  const books: any = await PRISMA.book
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
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      {books ? <Grid data={books} /> : <Reload />}
    </div>
  )
}
export default page
