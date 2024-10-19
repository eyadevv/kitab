import Link from "next/link";
import Image from "next/image";

import { animated, useSpring, useInView } from "@react-spring/web";
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
  const springs = useSpring({});
  const [ref, inView] = useInView();
  return (
    <Link
      href={`/books/${slug}`}
      className="h-88 bg-white flex w-full lg:w-1/5 rounded-lg  flex-shrink-0"
    >
      {/* <div className="flex h-full w-full items-center justify-center"> */}
      <animated.img
        src={cover || "/cover.jpg"}
        height={100}
        width={128}
        alt="cover"
        className="h-full w-full rounded-lg  object-cover flex flex-shrink-0"
        style={{
          background: "#ff6d6d",
          borderRadius: 8,
          ...springs,
        }}
      />
    </Link>
  );
};
export default Book;
