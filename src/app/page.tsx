import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <About/>
      <Reviews/>
    </div>
  );
}
