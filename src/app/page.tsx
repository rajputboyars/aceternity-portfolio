import { About } from "@/components/About";
import { OurClients } from "@/components/OurClients";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <About/>
      <h2>our client</h2>
      <OurClients/>
    </div>
  );
}
