import TextInput from "./TextInput";
const Select = ({
  checked,
  setter,
  placeholer,
  data,
  handleChange,
}: {
  checked: boolean;
  setter: any;
  placeholer: string;
  data: any;
  handleChange: Function;
}) => {
  return (
    <div className="w-full h-12 flex flex-row justify-start items-center gap-2">
      {checked ? (
        <TextInput placeholder={placeholer} handleChange={undefined} />
      ) : (
        <select
          onChange={(e) => handleChange(e.target.value)}
          className="select select-bordered w-full h-12 max-w-xs"
        >
          <option disabled selected>
            {placeholer}
          </option>
          {data?.map((item: any, id: number) => {
            return <option key={id}>{item.name || item.title}</option>;
          })}
        </select>
      )}
      <input
        checked={checked}
        onChange={() => setter(!checked)}
        type="checkbox"
        name=""
        id=""
      />
    </div>
  );
};

export default Select;
