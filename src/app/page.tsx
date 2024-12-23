import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { FeatureSection } from "@/components/FeatureSection";
import { OurClients } from "@/components/OurClients";
import { Reviews } from "@/components/Reviews";
import FAQ from "@/components/ui/Faq";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        <About />
        <section className="my-12 max-w-[1280px] w-full mx-auto px-5">
          <h2 className="text-center md:text-5xl text-4xl font-bold mb-10">Our <span className="text-[#c6a4e8]">Services</span>  </h2>
          <FeatureSection />
        </section>
        <section className="mt-14 mb-14 max-w-[1280px] w-full mx-auto px-5">
          <h2 className="text-center md:text-5xl text-4xl font-bold mb-10">Our <span className="text-[#c6a4e8]"> Client</span> </h2>
          <OurClients />
        </section>
        <Reviews />
        <section>
          <h2 className="text-center md:text-5xl text-4xl font-bold mb-10">Case <span className="text-[#c6a4e8]">Studies</span>  </h2>
          <CaseStudies />
        </section>
        <section className="mt-[50px]">
          <h2 className="text-center md:text-2xl text-4xl font-bold mb-10"><span className="text-[#c6a4e8]">FAQ</span></h2>
          <FAQ />
        </section>
      </div>
    </>
  );
}
