import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.redirect('http://localhost:3000/auth/register')
    // return NextResponse.redirect('/auth/register')
}