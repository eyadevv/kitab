"use client"
import { FaDownload } from "react-icons/fa"
import { useState } from "react"
const Download = ({ slug }: { slug: string }) => {
  const [state, setstate] = useState("")
  return (
    <a
      href={`/download/${slug}`}
      className="text-md m-4 flex flex-row items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-normal"
    >
      Download
      <FaDownload />
    </a>
  )
}

export default Download
