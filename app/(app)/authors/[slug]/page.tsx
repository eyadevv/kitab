import PRISMA from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
const page = async ({ params }: { params: { slug: string } }) => {
  const author = await PRISMA.author
    .findUnique({
      where: {
        slug: params.slug,
      },
      include: {
        _count: true,
        books: true,
      },
    })
    .then((res) => res)
    .catch((err) => null);

  const { name, country, description, _count }: any = author;

  return (
    <div className=" flex  h-max w-11/12 flex-col items-start justify-between gap-4 overflow-clip ">
      <div className="flex  h-max min-h-[70vh] w-full flex-shrink-0 flex-col flex-nowrap items-start justify-start gap-4 rounded-xl lg:flex-row ">
        <div className="flex h-96 flex-shrink-0 flex-col items-center justify-center sm:h-[120vw] sm:w-[90vw]">
          <Image
            src="/cover.jpg"
            width={999}
            height={999}
            alt="cover"
            className="h-full w-full rounded-lg object-fill"
          />
        </div>
        <div className="flex h-full flex-col items-center  justify-between gap-4 sm:w-11/12 lg:h-5/6 lg:w-2/3">
          <div className="flex w-full flex-col items-start justify-start ">
            <div className="flex h-max w-full flex-row flex-wrap items-center justify-between whitespace-nowrap">
              <h1 className="text-3xl font-bold">{name}</h1>
              <Link
                href={`/categories/${"categoryid"}`}
                className="bg-blue-600 bg-opacity-25 rounded-lg "
              >
                # {"rank"}
              </Link>
              <p>43</p>
            </div>
          </div>
          <div className="h-max w-full">
            <p className="leading-6">
              {description.length > 300
                ? description.slice(0, 300) + "..."
                : description}
            </p>
          </div>
          <div className="flex h-max w-full flex-row flex-wrap items-center justify-between gap-2"></div>
        </div>
      </div>

      {/* <div className="w-full h-44 flex-shrink-0 bg-white my-20"></div> */}
    </div>
  );
};
export default page;
const Item = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <p>{title}</p>
      <p className="font-bold">{content}</p>
    </div>
  );
};
