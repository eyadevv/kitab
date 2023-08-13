"use client";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Heart = () => {
  const [loved, setloved] = useState(false);

  return (
    <div className="w-max gap-2">
      {loved ? (
        <AiFillHeart
          size={30}
          fill="red"
          fillOpacity={100}
          onClick={() => setloved(!loved)}
        />
      ) : (
        <AiOutlineHeart
          size={30}
          fill="red"
          fillOpacity={100}
          onClick={() => setloved(!loved)}
        />
      )}
    </div>
  );
};
export default Heart;
