import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { FeatureSection } from "@/components/FeatureSection";
import { OurClients } from "@/components/OurClients";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <About />
      <h2 className="text-center">Feature Section</h2>
      <FeatureSection />
      <h2>our client</h2>
      <OurClients/>
      <Reviews/>
      <h2 className="text-center">Feature Section</h2>
      <CaseStudies/>
    </div>
  );
}
