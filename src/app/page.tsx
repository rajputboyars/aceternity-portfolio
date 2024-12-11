import { About } from "@/components/About";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import CardGrid from "@/components/ui/CardGrid";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <About/>
      <InfiniteMovingCardsDemo/>
      
      <CardGrid />
    </div>
  );
}
