import PRISMA from "@/lib/prisma";
import Grid from "@/components/app/Grid";
const page = async ({ params }: { params: { name: string } }) => {
  const category = await PRISMA.category
    .findUnique({
      where: {
        name: params.name,
      },
      include: {
        _count: true,
        books: {
          select: {
            name: true,
            cover: true,
            rate: true,
            slug: true,
            category: true,
          },
        },
      },
    })
    .then((res) => res)
    .catch((err) => err);

  return (
    <div className="flex w-11/12 flex-col items-center justify-start">
      <div className="flex h-10  w-full flex-row items-center justify-start gap-4 ">
        <h1 className="text-xl font-bold">{category?.name}:</h1>
        <p>{category?._count.books} Books</p>
      </div>
      {category?.books.length === 0 ? (
        <p>No Books in This Category</p>
      ) : (
        <Grid initialData={category?.books} type="book" />
      )}
    </div>
  );
};
export default page;
