"use client"
import { useState } from "react"
import { FaArrowRight, FaTruckLoading } from "react-icons/fa"
import LocalInput from "@/components/form/LocalInput"
import RemoteInput from "@/components/form/RemoteInput"
import axios from "axios"
import { useRouter } from "next/navigation"
const Page = () => {
  const ROUTER = useRouter()
  const [file, setfile] = useState(null)
  const [local, setlocal] = useState(true)
  const [loading, setloading] = useState(false)
  const [output, setoutput] = useState(null)

  return (
    <div className="flex h-screen  w-full flex-col items-center justify-center ">
      <div className="flex h-4/6 w-1/2 flex-col items-center justify-between overflow-clip rounded-xl bg-white bg-opacity-5">
        <div className="flex h-10 w-full flex-row items-center justify-around bg-red-900">
          <button className="" onClick={() => setlocal(!local)}>
            Local Files
          </button>
          <button className="" onClick={() => setlocal(!local)}>
            Remote Files
          </button>
        </div>
        <form className="flex h-full flex-shrink  flex-col items-center justify-center">
          <h1>{JSON.stringify(output)}</h1>
          {local ? (
            <LocalInput file={file} setfile={setfile} />
          ) : (
            <RemoteInput />
          )}
        </form>
        {file ? (
          <button className="btn" onClick={(e) => uploader(e, file)}>
            Next <FaArrowRight />
          </button>
        ) : null}
      </div>
    </div>
  )
}
export default Page

const uploader = async (e: any, file: any) => {
  e.preventDefault()
  const Form = new FormData()
  Form.append("file", file[0])
  const data = await axios({
    method: "Post",
    url: "/api/upload",
    data: Form,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => res)
    .catch((err) => err)

  return data
}
