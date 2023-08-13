import { NextResponse } from "next/server";
import PRISMA from "@/lib/prisma";
export async function GET(req: Request) {
  console.log(req.url);

  return NextResponse.json({
    msg: "Dynamic Route Handler",
  });
}
async function checkAccount(username: string) {
  await PRISMA.user
    .findUniqueOrThrow({
      where: {
        username: username,
      },
    })
    .then((res) => res)
    .catch((err) => null);
}
