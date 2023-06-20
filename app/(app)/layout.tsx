import Nav from "@/components/Nav"
import MobileMenu from "@/components/Menu"
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex h-screen  w-full flex-col items-center justify-between ">
      <Nav />
      <div className="flex h-full w-full flex-shrink items-start justify-center overflow-scroll ">
        {children}
      </div>
      <MobileMenu className=" md:hidden lg:hidden" />
    </section>
  )
}
