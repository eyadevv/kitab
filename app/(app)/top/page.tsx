import Grid from "@/components/app/Grid";
import PRISMA from "@/lib/prisma";

const page = async () => {
  const books = await PRISMA.book
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
    .catch((err) => null);

  return (
    <div className="w-11/12 h-mx flex flex-col justify-start items-center">
      <div className="w-full h-max flex flex-row justify-between items-center "></div>
      <Grid type="book" data={books} />
    </div>
  );
};
export default page;
