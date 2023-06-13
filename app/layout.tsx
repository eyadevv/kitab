import "./globals.css"
import { Inter } from "next/font/google"
import Nav from "@/components/Nav"
// const inter = Inter({ subsets: ["latin"] })
export const metadata = {
  title: "Kitab || Find Free and Paid Books ",
  description: "a platform aiming to make books available for every one",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-screen min-h-screen flex flex-col justify-start items-center overflow-x-clip bg-black text-white">
        <Nav />
        <main className="w-11/12 min-h-screen flex flex-row justify-between items-start gap-4">
          {children}
        </main>
      </body>
    </html>
  )
}
