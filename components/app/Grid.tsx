import Book from "./Book"
import { Reload } from "./Error"
const Grid = ({ data }: { data: any }) => {
  return (
    <div className=" grid h-max w-full   gap-4 rounded-xl bg-white bg-opacity-5  ">
      {data?.map((book: any, id: number) => {
        return <Book key={id} data={book} />
      })}
    </div>
  )
}
export default Grid
