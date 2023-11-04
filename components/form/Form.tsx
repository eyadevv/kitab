"use client";
import { useReducer, useState, useTransition } from "react";
import TextInput from "./TextInput";
import Select from "./Select";
const Form = ({ authors, categories }: any) => {
  const [check, setcheck] = useState({
    author: false,
    language: false,
    category: false,
  });
  const [data, setdata] = useState({
    title: null,
    author: null,
    category: null,
    language: null,
    year: null,
  });

  return (
    <div className="flex h-full w-11/12 max-w-lg flex-col items-start justify-start gap-4 rounded">
      <TextInput
        placeholder="Book Name"
        handleChange={(value: any) =>
          setdata({
            ...data,
            title: value,
          })
        }
      />
      <Select
        data={authors}
        placeholer="Author"
        checked={check.author}
        setter={() =>
          setcheck({
            ...check,
            author: !check.author,
          })
        }
        handleChange={(value: any) =>
          setdata({
            ...data,
            author: value,
          })
        }
      />
      <Select
        data={categories}
        placeholer="category"
        checked={check.category}
        setter={() =>
          setcheck({
            ...check,
            category: !check.category,
          })
        }
        handleChange={(value: any) =>
          setdata({
            ...data,
            category: value,
          })
        }
      />
      <Select
        handleChange={(value: any) =>
          setdata({
            ...data,
            language: value,
          })
        }
        data={[
          {
            title: "EN",
          },
          {
            title: "AR",
          },
        ]}
        placeholer="Languages"
        checked={check.language}
        setter={() =>
          setcheck({
            ...check,
            language: !check.language,
          })
        }
      />
      <TextInput
        placeholder="Year"
        handleChange={(value: any) =>
          setdata({
            ...data,
            year: value,
          })
        }
      />
      <div className="form-control">
        <label className="label">
          <span className="label-text">Book Summery</span>
        </label>
        <textarea
          className="textarea-bordered textarea h-24"
          placeholder="Summery"
        ></textarea>
      </div>
      <button className="btn bg-black">Submit</button>
      {JSON.stringify(data)}
    </div>
  );
};
export default Form;
