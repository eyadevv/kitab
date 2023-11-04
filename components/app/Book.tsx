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
    author,
  }: {
    name: string;
    slug: string;
    cover: string;
    rate: number;
    category: any;
    author: {
      name: string;
    };
  } = data || {};

  return (
    <Link
      href={`/books/${slug}`}
      className="h-88 flex w-44 rounded-lg  flex-shrink-0"
    >
      {/* <div className="flex h-full w-full items-center justify-center"> */}
      <Image
        src="/cover.jpg"
        height={100}
        width={128}
        alt="cover"
        className="h-full w-full rounded-lg  object-cover"
      />
    </Link>
  );
};
export default Book;
