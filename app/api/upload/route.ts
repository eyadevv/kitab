import { NextResponse } from "next/server"
export async function POST(request: Request) {
  const data = await request.json()
  console.log(data)
  return NextResponse.json({
    name: "welcome to Upload Server",
  })
}
export async function GET(request: Request) {
  return NextResponse.json({
    name: "welcome to Upload Server , This Method Wont work",
  })
}
