"use client"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa"
export const Reload = () => {
  return (
    <div className="flex h-96 w-2/3 flex-col items-center justify-around gap-2 rounded-xl bg-red-900 bg-opacity-75 text-center sm:w-11/12">
      <div className="flex flex-col flex-wrap items-center justify-center gap-3">
        <p>There was an error on our side ,Please Refresh the page</p>
        <button
          className="rounded-lg bg-black bg-opacity-25 px-6 py-4 "
          onClick={() => location.reload()}
        >
          Reload
        </button>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-2">
        <p>If the error is Persistent Please Submit </p>
        <a
          href="/report"
          className="flex flex-row flex-nowrap items-center justify-center gap-2 font-bold"
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
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1>404</h1>
      <p>Could&#39;t find the resources requested</p>
      <Link href="/" className="mt-4 rounded-lg bg-red-700 px-2 py-6 font-bold">
        Go Home
      </Link>
    </div>
  )
}
