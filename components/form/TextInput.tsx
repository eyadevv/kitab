const TextInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input h-12 flex-shrink-0 input-bordered input-secondary w-full max-w-xs"
    />
  )
}

export default TextInput
