import { About } from "@/components/About";
import { FeatureSection } from "@/components/FeatureSection";
import { OurClients } from "@/components/OurClients";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <About />
      <h2 className="text-center">Feature Section</h2>
      <FeatureSection />
      <h2>our client</h2>
      <OurClients/>
    </div>
  );
}
