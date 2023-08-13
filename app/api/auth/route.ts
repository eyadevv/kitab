import { NextResponse } from "next/server";
import PRISMA from "@/lib/prisma";
export async function GET(req:Request) {

    return NextResponse.json({
        msg:"Hello There"
    })

}