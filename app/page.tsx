import Head from "next/head"

import { CallToAction } from "@/components/ui/CallToAction"
import { Faqs } from "@/components/ui/Faqs"
import { Footer } from "@/components/ui/Footer"
import { Header } from "@/components/ui/Header"
import { Hero } from "@/components/ui/Hero"
import { Pricing } from "@/components/ui/Pricing"
import { PrimaryFeatures } from "@/components/ui/PrimaryFeatures"
import { SecondaryFeatures } from "@/components/ui/SecondaryFeatures"
import { Testimonials } from "@/components/ui/Testimonials"

export default function Home() {
  return (
    <main className="h-max w-screen bg-white dark:bg-black dark:text-white">
      <Header />
      <div>
        <Hero />
        <PrimaryFeatures />
        <CallToAction />
        <Testimonials />
      </div>
      <Footer />
    </main>
  )
}
