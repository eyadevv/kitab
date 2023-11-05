"use server";

import { revalidatePath } from "next/cache";
import PRISMA from "@/lib/prisma";
export default async function Scroll(id: number) {
  const books: any = await PRISMA.book
    .findMany({
      take: 20,
      skip: id,
      select: {
        name: true,
        cover: true,
        rate: true,
        slug: true,
        author: {
          select: {
            name: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
      },
    })
    .then((res) => res)
    .catch((err) => {
      console.log(err);
      return null;
    });
  revalidatePath("/");
  return books;
}
