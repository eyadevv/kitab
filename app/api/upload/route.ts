import { NextResponse , NextRequest } from "next/server"
import mime from "mime"
import { join } from "path"
import * as fs from 'node:fs/promises'
import * as dateFn from 'date-fns'
export async function POST(request: Request) {
  const form = await request.formData()
  const relativeUploadDir = `/uploads/${dateFn.format(Date.now(), "dd-MM-Y")}`;
  const uploadDir = join(process.cwd(), "public" , relativeUploadDir);

  const file = form.get('file') as Blob | null
  if (!file) {
    return NextResponse.json(
      {error:"File Blob Not Found"},
      {status:404})
  }
  const buffers = Buffer.from(await file.arrayBuffer())
  try {
  await fs.stat(uploadDir)
  } catch (error: any) {
    if (error.code === 'ENOENT') {
        await fs.mkdir(uploadDir , {recursive:true})
    } else {
      return NextResponse.json({
        ERROR: "Some Thing Went Wrong",
      } , {
        status:500
      })

    }

  }
  // console.log(buffers.toString());
  await fs.writeFile(uploadDir+'/test.pdf' ,buffers.toString()  ).then((res)=> console.log(res))
  .then((err)=> console.log(err))

  return NextResponse.json({
    name: "welcome to Upload Server",
  })
}
