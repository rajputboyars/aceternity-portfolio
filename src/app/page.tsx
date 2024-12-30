import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { FeatureSection } from "@/components/FeatureSection";
import Header from "@/components/Header";
import { OurClients } from "@/components/OurClients";
import { Reviews } from "@/components/Reviews";
import FAQ from "@/components/ui/Faq";
import { InfiniteMovingVideos } from "@/components/ui/InfiniteMovingVideos";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  const SHORT_VIDEOS = [
    "https://www.youtube.com/embed/PmwvOV5Lq5Q?si=zRBg7Z0mXhDH5U2s",
    "https://www.youtube.com/embed/sJdjCy35Hww?si=Pv2KRqMZFcIvmSUN",
    "https://www.youtube.com/embed/R0CfLm0brJ8?si=gxxIqbpJUo84Q0Qm",
    "https://www.youtube.com/embed/w42zsR8oWOQ?si=3Rb3ImpwzpHWLiOG",
    "https://www.youtube.com/embed/MjT_9XfvEcE?si=e4CbwmRAg7tCf-R0",
    "https://www.youtube.com/embed/pgj_cPqTMqk?si=9X4Wzi5hxyXQEFSG",
    "https://www.youtube.com/embed/M4dQP7c_bjM?si=VZdKi9yoY2vcVK_s",
  ];
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black text-white px-5">
        <Header />
        <div id="about">
          <About />
        </div>
        <section id="services" className="scroll-m-10 py-12 max-w-[1280px] w-full mx-auto px-5">
          <h2 className="text-center md:text-5xl text-4xl font-bold mb-10">Our <span className="text-[#c6a4e8]">Services</span>  </h2>
          <FeatureSection />
        </section>
        <section id="clients" className="mt-14 scroll-m-20 mb-14 max-w-[1280px] w-full mx-auto px-5">
          <h2 className="text-center md:text-5xl text-4xl font-bold mb-10">Our <span className="text-[#c6a4e8]"> Client</span> </h2>
          <OurClients />
          <div className="lg:hidden">
            <InfiniteMovingVideos
              videoLinks={SHORT_VIDEOS}
              direction="left"
              speed="slow"
              pauseOnHover={true}
              className="custom-class"
            />
          </div>
        </section>
        <div id="reviews" className="scroll-m-10">
          <Reviews />
        </div>
        <section className="mt-10">
          <h2 className="text-center md:text-5xl text-4xl font-bold mb-10">Case <span className="text-[#c6a4e8]">Studies</span>  </h2>
          <CaseStudies />
        </section>
        <section id="faq" className="mt-[50px] scroll-m-20">
          <h2 className="text-center md:text-5xl text-4xl font-bold mb-10"><span className="text-[#c6a4e8]">FAQ</span></h2>
          <FAQ />
        </section>
        <section className="py-10">
          <Link href={"https://calendly.com/kukkarshubham121/30min"} className=" text-center mx-auto cursor-pointer text-xl p-4 rounded-lg bg-[#0504a5] block max-w-[250px] w-full ">Still have a question?
            <span className=" border-b border-[#fff mt-2]">Get in touch.</span>
          </Link>
        </section>
      </div>
    </>
  );
}
