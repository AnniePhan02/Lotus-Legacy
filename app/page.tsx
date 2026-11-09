import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  ApplyCTA,
  Benefits,
  FAQ,
  Hero,
  NoExperience,
  Onboarding,
  WhatToExpect,
  WhyLotus,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <NoExperience />
        <WhatToExpect />
        <WhyLotus />
        <Benefits />
        <Onboarding />
        <ApplyCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
