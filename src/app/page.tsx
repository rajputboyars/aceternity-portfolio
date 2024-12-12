import { About } from "@/components/About";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import CardGrid from "@/components/ui/CardGrid";
import FAQ from "@/components/ui/Faq";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <About/>
      <InfiniteMovingCardsDemo/>
      <FAQ/>
      <CardGrid />
    </div>
  );
}
