"use client"
import Book from "./Book"
import { useState } from "react"
import Grid from "./Grid"
const Section = ({ data, name }: { data: any; name: string }) => {
  return (
    <section className="w-full h-max flex flex-col  gap-4 ">
      <div className="w-full h-4 flex flex-row justify-between items-center">
        <p>{name}</p>
        <p>Show more</p>
      </div>
      <Grid>
        {data.length > 0
          ? data.map(
              (
                book: { title: string; price: string; rate: number },
                id: number
              ) => {
                return <Book key={id} data={book} />
              }
            )
          : null}
      </Grid>
    </section>
  )
}
export default Section
