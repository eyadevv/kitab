"use client";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
const Reload = () => {
  return (
    <div className="flex h-80 w-full max-w-2xl flex-col items-center justify-around gap-2 rounded-xl bg-red-900 bg-opacity-75 text-center">
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
        <p>Report has been submited ,we will take a look </p>
      </div>
    </div>
  );
};

export default Reload;
