"use client"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa"
export const Reload = () => {
  return (
    <div className="w-full h-full flex flex-col justify-around items-center gap-2 bg-red-900">
      <div className="flex flex-col justify-center gap-3 items-center">
        <p>There was an error on our side ,Please Refresh the page</p>
        <button
          className="py-4 px-6 bg-black bg-opacity-25 rounded-lg "
          onClick={() => location.reload()}
        >
          Reload
        </button>
      </div>
      <div className="flex flex-row gap-2">
        <p>If the error is Persistent Please Submit </p>
        <a
          href="/report"
          className="font-bold flex flex-row justify-center items-center gap-2"
        >
          <p>a Report</p>
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  )
}

export const NotFoundBook = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1>404</h1>
      <p>Could&#39;t find the resources requested</p>
      <Link href="/app" className="p-4 rounded bg-blue-700 mt-4 font-bold">
        Go Home
      </Link>
    </div>
  )
}
