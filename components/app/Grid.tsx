import Book from "./Book"
import Card from "./Card"
import { Reload } from "./Error"
const Grid = ({ data, type }: { data: any; type: string }) => {
  return (
    <div className="flex h-max w-11/12 flex-wrap items-start justify-evenly gap-4 rounded-xl  bg-opacity-10 py-4 ">
      {!data ? (
        <Reload />
      ) : (
        data?.map((data: any, id: number) => {
          return type !== "book" ? (
            <Card data={data} type={type} />
          ) : (
            <Book key={id} data={data} />
          )
        })
      )}
    </div>
  )
}
export default Grid
