import Book from "./Book";
import Category from "./Category";
import Author from "./Author";
import Error from "./Error";
const Grid = ({ data, type }: { data: any; type: string }) => {
  return (
    <div className="flex h-max w-full flex-wrap items-start justify-center gap-4 rounded-xl  py-4 ">
      {!data ? (
        <Error />
      ) : (
        data?.map((data: any, id: number) => {
          return type === "category" ? (
            <Category data={data} />
          ) : type === "author" ? (
            <Author data={data} />
          ) : (
            <Book key={id} data={data} />
          );
        })
      )}
    </div>
  );
};
export default Grid;
