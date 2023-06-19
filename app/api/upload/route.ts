import { NextResponse , NextRequest } from "next/server"
import mime from "mime"
import { join } from "path"
import * as fs from 'node:fs/promises'
import * as dateFn from 'date-fns'


const Dir = async () => {
  const relativeUploadDir = `/uploads/${dateFn.format(Date.now(), "dd-MM-Y")}`;
  const path = join(process.cwd(), "public" , relativeUploadDir);
  return path

}
const CheckOrCreateDir = async (path:string) => {
  try {
    await fs.stat(path)
    return 'Dir is Already There'
  } catch (error :any) {
    return error.code === 'ENOENT'? await fs.mkdir(path , {recursive:true}) : 'Unknown Error'
  }
}
export async function POST(request: Request) {
  const form = await request.formData()
  const file = form.get('files') as Blob | null
  const path = await Dir()
  const output = await CheckOrCreateDir(path)
  if (!file) {
    return NextResponse.json(
      {error:"File Blob Not Found"},
      {status:404})
  }
  const buffers = Buffer.from(await file.arrayBuffer())

  return NextResponse.json({
    msg: "File Uploaded",
  },
  {status:200}
  )
}
