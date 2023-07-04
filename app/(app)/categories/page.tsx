import Grid from '@/components/app/Grid'
import PRISMA from "@/lib/prisma"
const page = async () => {
  const categories = await PRISMA.category
    .findMany({
      include: {
        _count: true,
      },
    }).then((res) => res)
    .catch(()  => null)

  return (
    <div className="flex h-max w-full flex-row flex-wrap items-center justify-center gap-4 ">
        <Grid data={categories} type='category' />
    </div>
  )
}
export default page
