import { NextResponse } from "next/server"
import * as fs from "node:fs/promises"

export async function GET() {
  const filename = "123.pdf"
  const file = await fs.readFile("./app/download/test.pdf")
  return new Response(file, {
    headers: {
      "content-disposition": `attachment; filename="${filename}"`,
      "content-type": "application/octet-stream",
    },
  })
}
