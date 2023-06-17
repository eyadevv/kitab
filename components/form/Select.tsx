import TextInput from "./TextInput"
const Select = ({
  checked,
  setchecked,
  placeholer,
  data,
}: {
  checked: boolean
  setchecked: any
  placeholer: string
  data: any
}) => {
  return (
    <div className="w-full h-12 flex flex-row justify-start items-center gap-2">
      {checked ? (
        <TextInput placeholder={placeholer} />
      ) : (
        <select className="select select-bordered w-full h-12 max-w-xs">
          <option disabled selected>
            {placeholer}
          </option>
          {data?.map((item: any, id: number) => {
            return <option key={id}>{item.name || item.title}</option>
          })}
        </select>
      )}
      <input
        checked={checked}
        onChange={() => setchecked(!checked)}
        type="checkbox"
        name=""
        id=""
      />
    </div>
  )
}

export default Select
