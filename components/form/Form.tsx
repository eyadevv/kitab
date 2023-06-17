"use client"
import { useState } from "react"
import TextInput from "./TextInput"
import Select from "./Select"
const Form = ({ authors, categories }: any) => {
  const [author, setauthor] = useState(false)
  const [category, setcategory] = useState(false)
  const [language, setlanguage] = useState(false)

  return (
    <div className="flex w-1/2 h-full gap-4 rounded flex-col justify-start items-start">
      <TextInput placeholder="Book Name" />
      <Select
        data={authors}
        placeholer="Author"
        checked={author}
        setchecked={setauthor}
      />
      <Select
        data={categories}
        placeholer="category"
        checked={category}
        setchecked={setcategory}
      />
      <Select
        data={[
          {
            title: "EN",
          },
          {
            title: "AR",
          },
        ]}
        placeholer="Languages"
        checked={language}
        setchecked={setlanguage}
      />
      <TextInput placeholder="Year" />
      <div className="form-control">
        <label className="label">
          <span className="label-text">Book Summery</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Summery"
        ></textarea>
      </div>
      <button className="btn bg-black">
        <span className="loading-spinner"></span>
        Submit
      </button>
    </div>
  )
}
export default Form
