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
  const [msg, setmsg] = useState('')
  const [ref, inview] = useInView();
  const [loading, setloading] = useState(false);
  const [ispending, startTransition] = useTransition();
  const [data, setdata] = useState(initialData);
  const [cursor, setcursor] = useState(20);
  const [done, setdone] = useState(false);
  useEffect(() => {
    if (inview && !loading) {
      return startTransition(async () => {
        setloading(true);
        setmsg('loading')
        try {
          const res = await Scroll(cursor);
          if (res?.length === 0) {
            setdone(true);
            setmsg('That`s all the data we have')
          } else {
            setdata((prev: any) => [...prev, ...res]),
              setcursor((prev: number) => prev + 20);
          }
        } catch (error) {
          setmsg("Could't Load Data ,Please check you internet - disable adblocker")
        }
        setloading(false);
      });
    }
  }, [inview]);
  if (!data || data.length === 0) {
    return <Error />;
  } else {
    return (
      <div className="flex justify-center items-start flex-col w-screen relative min-h-[300vh]">
        <div className="flex flex-row justify-center items-start flex-wrap w-full h-max gap-2 ">
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
        <div className="w-screen h-screen bg-white " ></div>
        <div
          ref={ref}
          className="w-full h-[50vh] -z-10 bottom-0 absolute bg-transparent"
        ></div>
        <p className="absolute top-10 left-0 bg-white text-black" >{msg}</p>
      </div>
    );
  }
};
export default Grid;
