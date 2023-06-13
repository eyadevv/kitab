import Book from "./Book"
import { Reload } from "./Error"
const Grid = ({ data }: { data: [] }) => {
  return (
    <div className="w-full h-max bg-white bg-opacity-10 flex flex-row  justify-start items-start flex-wrap gap-4  ">
      {data?.length > 0 ? (
        data.map((book, id) => {
          return <Book key={id} data={book} />
        })
      ) : (
        <Reload />
      )}
    </div>
  )
}
export default Grid
