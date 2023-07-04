import PRISMA from "@/lib/prisma"
import Grid from "@/components/app/Grid"

const page = async () => {
  const authors = await PRISMA.author
    .findMany({
      include:{
        _count:true
      }
    })
    .then((res) => res)
    .catch((err) => null)

  return (
    <main className="flex h-max w-11/12 ">
      <Grid data={authors} type='author' />
    </main>
  )
}
export default page
