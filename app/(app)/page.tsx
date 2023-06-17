import PRISMA from "@/lib/prisma"
import Grid from "@/components/Grid"
import { Reload } from "@/components/Error"
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
    <div className="w-full h-full flex flex-col justify-center items-center gap-3">
      {books?.length !== 0 ? <Grid data={books} /> : <Reload />}
      {JSON.stringify(books)}
    </div>
  )
}
export default page
