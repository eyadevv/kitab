import Nav from "@/components/app/Nav"
import MobileMenu from "@/components/app/MobileMenu"
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full h-screen  flex flex-col justify-between items-center ">
      <Nav />
      <div className="h-full w-full flex flex-shrink overflow-scroll justify-center items-start ">
        {children}
      </div>
      <MobileMenu />
    </section>
  )
}
