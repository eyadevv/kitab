import Nav from "@/components/Nav"
import MobileMenu from "@/components/MobileMenu"
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full h-screen  flex flex-col justify-between items-center ">
      <Nav />
      <div className="h-full flex-shrink w-full overflow-scroll">
        {children}
      </div>
      <MobileMenu />
    </section>
  )
}
