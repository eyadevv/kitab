"use client";
import Book from "./Book";
import Category from "./Category";
import Author from "./Author";
import Error from "./Error";
import { useInView, animated, useSpring } from "@react-spring/web";
import {
  use,
  useEffect,
  useState,
  useTransition,
  startTransition,
} from "react";
import Scroll from "@/app/actions/scroll";
const Grid = ({ initialData, type }: { initialData: any; type: string }) => {
  const [ref, inview] = useInView();
  const [loading, setloading] = useState(false);
  const [ispending, startTransition] = useTransition();
  const [data, setdata] = useState(initialData);
  const [cursor, setcursor] = useState(20);
  const [done, setdone] = useState(false);

  useEffect(() => {
    console.log("use effect triggered");
    if (inview && !loading) {
      return startTransition(async () => {
        console.log("start transition triggered");
        setloading(true);
        console.log("loading + ", loading);
        try {
          const res = await Scroll(cursor);
          if (res?.length === 0) {
            setdone(true);
          } else {
            setdata((prev: any) => [...prev, ...res]),
              setcursor((prev: number) => prev + 20);
          }

          console.log(res.length);
        } catch (error) {
          console.log(error);
        }
        setloading(false);
      });
    }
  }, [inview]);
  if (!data) {
    return <Error />;
  } else {
    return (
      <div className="flex relative min-h-screen flex-col gap-2 justify-center items-center w-full h-max">
        <div className="flex flex-row flex-wrap gap-3 justify-center items-start w-full h-max min-h-screen ">
          {data.map((data: any, id: number) => {
            return type === "category" ? (
              <Category data={data} />
            ) : type === "author" ? (
              <Author data={data} />
            ) : (
              <Book key={id} data={data} />
            );
          })}
        </div>
        <animated.div
          ref={ref}
          className="w-full h-[50vh] -z-10 bottom-0 bg-transparent absolute"
        ></animated.div>
        {done && (
          <p className="text-center inline-block text-xl font-bold text-gray-400">
            No More Data
          </p>
        )}
      </div>
    );
  }
};
export default Grid;
