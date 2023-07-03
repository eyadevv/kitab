import Book from "./Book"
import { Reload } from "./Error"
const Grid = ({ data }: { data: any }) => {
  return (
    <div className="flex h-max w-11/12 flex-wrap items-start justify-evenly gap-2 rounded-xl  bg-opacity-10 py-4 ">
      {data?.map((book: any, id: number) => {
        return <Book key={id} data={book} />
      })}
    </div>
  )
}
export default Grid
