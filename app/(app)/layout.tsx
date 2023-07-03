import Nav from "@/components/app/Nav"
import MobileMenu from "@/components/app/MobileMenu"
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex h-screen w-full  flex-col items-center justify-between overflow-clip ">
      <Nav />
      <div className="flex h-full w-full flex-shrink items-start justify-center overflow-scroll ">
        {children}
      </div>
      <MobileMenu className=" lg:hidden" />
    </section>
  )
}
