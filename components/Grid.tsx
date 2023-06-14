import Book from "./Book"
import { Reload } from "./Error"
const Grid = ({ data }: { data: any }) => {
  return (
    <div className="w-full h-max bg-white bg-opacity-10 flex flex-row  justify-start items-start flex-wrap gap-4  ">
      {data?.map((book: any, id: number) => {
        return <Book key={id} data={book} />
      })}
    </div>
  )
}
export default Grid
