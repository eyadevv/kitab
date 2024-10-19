import "./globals.css";

export const metadata = {
  title: "Kitab - Best Platform to Download Books",
  description:
    "The Platform goal is to provide a better experience for those looking to download books online",
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
