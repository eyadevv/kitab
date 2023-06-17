const LocalInput = ({ file, setfile }: any) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Add one or Many Books</span>
      </label>
      <input
        type="file"
        accept=".pdf , .epud "
        className="file-input file-input-bordered w-full max-w-xs"
        onChange={(e) => setfile(e.target.files)}
      />
    </div>
  )
}
export default LocalInput
