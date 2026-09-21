import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UploadCard from "@/components/UploadCard";
import AdSlot from "@/components/AdSlot";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Faq from "@/components/Faq";
import OtherTools from "@/components/OtherTools";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Headline and tool share the first screen */}
        <section
          aria-label="Background remover"
          className="mx-auto grid max-w-6xl gap-10 px-5 pb-10 pt-10 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-14 lg:pt-14"
        >
          <div className="lg:col-span-5">
            <Hero />
          </div>
          <div className="lg:col-span-7">
            <UploadCard />
          </div>
        </section>

        {/* The single ad slot: below the tool, muted, fixed height */}
        <div className="px-5 sm:px-8">
          <AdSlot />
        </div>

        <OtherTools />
        <Features />
        <UseCases />
        <HowItWorks />
        <Faq />
      </main>

      <Footer />
    </>
  );
}
