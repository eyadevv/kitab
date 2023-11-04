import Image from "next/image";
import Link from "next/link";
const Card = ({ data }: any) => {
  const { name, _count } = data;
  return (
    <Link
      href={`/categories/${name}`}
      className="w-max h-max min-h-[6rem]  justify-center items-center min-w-[12rem] p-4 text-white bg-white  rounded-xl bg-opacity-10 flex flex-row gap-2 hover:bg-opacity-20"
    >
      <div className="w-max flex flex-col gap-1">
        <div className="gap-4 flex flex-row justify-center items-center w-max h-max">
          <p className="text-xl font-semibold">{name}</p>
        </div>
        <p className="text-sm font-normal">Books: {_count?.books}</p>
      </div>
    </Link>
  );
};
export default Card;
