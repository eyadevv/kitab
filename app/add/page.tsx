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
    .catch((err) => null)
  const authors = await PRISMA.author
    .findMany({
      select: {
        name: true,
      },
    })
    .then((res) => res)
    .catch((err) => null)
  return (
    <div className="flex h-max w-11/12 items-start justify-start pt-8">
      {authors && categories ? (
        <>
          <Form authors={authors} categories={categories} />
          <div className="h-96 w-1/2 bg-white"></div>
        </>
      ) : (
        <p>ERROR </p>
      )}
    </div>
  )
}
export default page
