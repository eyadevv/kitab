"use client"
import { useState } from "react"
import { FaArrowRight, FaTruckLoading } from "react-icons/fa"
import LocalInput from "@/components/form/LocalInput"
import RemoteInput from "@/components/form/RemoteInput"
import Details from "@/components/form/Details"
import axios from "axios"
const Page = () => {
  const [file, setfile] = useState(null)
  const [local, setlocal] = useState(true)
  const [loading, setloading] = useState(false)

  return (
    <div className="w-full h-screen  flex flex-col justify-center items-center ">
      <div className="w-1/2 h-4/6 bg-white bg-opacity-5 flex flex-col justify-between items-center rounded-xl overflow-clip">
        <div className="w-full h-10 bg-red-900 flex flex-row justify-around items-center">
          <button className="" onClick={() => setlocal(!local)}>
            Local Files
          </button>
          <button className="" onClick={() => setlocal(!local)}>
            Remote Files
          </button>
        </div>
        <div className="h-full flex flex-shrink justify-center items-center">
          {local ? (
            <LocalInput file={file} setfile={setfile} />
          ) : (
            <RemoteInput />
          )}
        </div>
        {file ? (
          <button className="btn">
            Next <FaArrowRight />
          </button>
        ) : null}
      </div>
    </div>
  )
}
export default Page

// const upload = async ({ file }) => {
//   const data = await axios({
//     method: "POST",
//     url: "/api/upload",
//     data: file,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => {
//       return res
//     })
//     .catch((err) => {
//       return err
//     })

//   return data
// }
