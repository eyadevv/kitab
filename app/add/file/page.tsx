import Form from "@/components/form/Form"
import PRISMA from "@/lib/prisma"
const page = async () => {
  const categories = await PRISMA.category
    .findMany({
      select: {
        title: true,
      },
    })
    .then((res) => res)
    .catch((err) => err)
  const authors = await PRISMA.author
    .findMany({
      select: {
        name: true,
      },
    })
    .then((res) => res)
    .catch((err) => err)

  console.log(authors)
  console.log(categories)
  return (
    <div className="w-11/12 h-max flex justify-start items-start pt-8">
      <Form authors={authors} categories={categories} />
      <div className="w-1/2 h-96 bg-white"></div>
    </div>
  )
}
export default page
