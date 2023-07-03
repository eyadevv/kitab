import { NextResponse } from "next/server"
export async function GET() {
  return NextResponse.json({
    err: "You Need TO Specify a File to Download",
  })
}
