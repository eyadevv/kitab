const TextInput = ({
  placeholder,
  handleChange,
}: {
  placeholder: string;
  handleChange: any;
}) => {
  return (
    <input
      onChange={(e) => handleChange(e.target.value)}
      type="text"
      placeholder={placeholder}
      className="input h-12 flex-shrink-0 input-bordered input-secondary w-full max-w-xs"
    />
  );
};

export default TextInput;
