import Link from "next/link";
import Image from "next/image";
// hi copilot

const Book = ({ id, data }: any) => {
  const {
    name,
    slug,
    cover,
    rate,
    category,
  }: {
    name: string;
    slug: string;
    cover: string;
    rate: number;
    category: any;
  } = data || {};

  return (
    <Link
      href={`/books/${slug}`}
      className="h-88 flex w-40 flex-col items-center justify-center gap-3  rounded-xl bg-dark dark:bg-white text-black dark:text-white bg-opacity-10 p-4  text-sm sm:h-max sm:w-24 "
    >
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src="/cover.jpg"
          height={100}
          width={128}
          alt="cover"
          className="h-max w-32 rounded-lg  object-cover"
        />
      </div>

      <p className="text-md whitespace-nowrap font-semibold sm:text-xs sm:font-light">
        {name.length <= 15 ? name : name.slice(0, 16) + ".."}
      </p>
      <p className="text-xs">{category?.name}</p>
    </Link>
  );
};
export default Book;
