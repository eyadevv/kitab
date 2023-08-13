import "./globals.css";
// import { Inter } from "next/font/google"
import Nav from "@/components/app/Nav";

// const inter = Inter({ subsets: ["latin"] })
export const metadata = {
  title: "Kitab || Find Free and Paid Books ",
  description: "a platform aiming to make books available for every one",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-screen flex-col items-center justify-start overflow-x-clip text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
