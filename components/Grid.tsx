const Grid = ({ children, style }) => {
  return (
    <div
      style={style}
      className="w-full h-max grid grid-cols-5 grid-flow-row md:grid-cols-3 sm:grid-cols-2 place-items-baseline rounded-lg overflow-hidden gap-4"
    >
      {children}
    </div>
  )
}
export default Grid
