import { About } from "@/components/About";
import { FeatureSection } from "@/components/FeatureSection";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <About />
      <h2 className="text-center">Feature Section</h2>
      <FeatureSection />
    </div>
  );
}
