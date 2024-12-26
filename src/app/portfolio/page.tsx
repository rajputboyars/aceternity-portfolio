import { InfiniteMovingVideos } from '@/components/ui/InfiniteMovingVideos';
import Link from 'next/link'
import React from 'react'

const SHORT_VIDEOS = [
  "https://www.youtube.com/embed/TxqU1Q9i4aY?si=yAny9FxBKBa3TVXk",
  "https://www.youtube.com/embed/RbqMVcsp9n0?si=1U3t-laJS3W66qfB",
  "https://www.youtube.com/embed/5xOwcvHXSag?si=XrPdC1Flp1YZw7Z3",
  "https://www.youtube.com/embed/z8Q3pN8oXw4?si=XUCTD_1HQh4k31oS",
  "https://www.youtube.com/embed/GthhE0f-mzY?si=PB86T1gGyThPQlTL",
  "https://www.youtube.com/embed/8v-U5qxUwek?si=_JImYS-OToxxx0KQ",
  "https://www.youtube.com/embed/zUHdvMlnEPo?si=KDVvzRVfbeM2ti2S",
];
const LONG_VIDEOS = [
  "https://www.youtube.com/embed/MjT_9XfvEcE?si=cYbnkeFc2UtJSqXV",
  "https://www.youtube.com/embed/Wu8JB9pg2t4?si=3SeknWnoWVpdbmEz",
  "https://www.youtube.com/embed/AgiYbevEE1A?si=j9Xj0xo965vBfEJ7",
  "https://www.youtube.com/embed/s1SjpYBI4-Y?si=6OmW2vfQ0KhWFil_",
  "https://www.youtube.com/embed/UFPmBCM8KmU?si=RBEtyU32ixHTU_uK",
  "https://www.youtube.com/embed/w42zsR8oWOQ?si=mdeNNuNhpbwX8aza",
  "https://www.youtube.com/embed/Hvr9pbdwHDE?si=Hf2jyrEpxPpUw-Sy",
];
const PODCASTS = [
  "https://www.youtube.com/embed/1bzhUhswZuY?si=ZYdGiCSsGLWOFfaL",
  "https://www.youtube.com/embed/R0CfLm0brJ8?si=IvZWE6AUsE3tq5B_",
  "https://www.youtube.com/embed/A44MGp-In4w?si=jZaKNkgaPVmxtKk4",
  "https://www.youtube.com/embed/hYyXN5JWh7E?si=xKO5jTP6NlOQTG-H",
];
const Product_Explainer_Videos = [
  "https://www.youtube.com/embed/bUSUfGxax08?si=pzusLdKaIG2t2-6N",
  "https://www.youtube.com/embed/X11llH-Fedw?si=YSb7pI9hUGZhNOGb",
  "https://www.youtube.com/embed/goCUqVUk3FQ?si=V6Zm2CJcgA34_4VL",
  "https://www.youtube.com/embed/BDuaYg_A7s4?si=QYW0yORGjejJEIg2",
];
const Documentaries = [
  "https://www.youtube.com/embed/bCLYzD6RC7A?si=wCadLm0LAweZIVnD",
  "https://www.youtube.com/embed/E1Dl6i8qC5o?si=SorES8Eueik1KWCf",
  "https://www.youtube.com/embed/M4dQP7c_bjM?si=_MvwluRJFb5HExHO",
  "https://www.youtube.com/embed/LCW7jkMim_0?si=EaWyeaHdC9JBWfFX",
];
const portfolio = () => {
  return (
    <div className='bg-black text-white'>
      <div className='max-w-7xl m-auto'>
        <Link href={"/"} className='py-2 px-4 border text-[#fff] border-[#0504a5] rounded-[8px] ml-[32px] cursor-pointer inline-block mt-[32px] transition-all hover:shadow-[0px_4px_6px_1px_rgba(5,4,165,1)]'> 👈 Back To Home</Link>
        <section className='my-12 max-w-[1280px] w-full mx-auto'>
          <h2 className="text-center text-5xl font-bold mb-10"><span>Short Videos</span> </h2>
          <InfiniteMovingVideos
            videoLinks={SHORT_VIDEOS}
            direction="left"
            speed="slow"
            pauseOnHover={true}
            className="custom-class"
          />
        </section>
        <section className='my-12 max-w-[1280px] w-full mx-auto' id=''>
          <h2 className="text-center text-5xl font-bold mb-10"><span>Long Videos</span> </h2>
          <InfiniteMovingVideos
            videoLinks={LONG_VIDEOS}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="custom-class"
          />
        </section>
        <section className='my-12 max-w-[1280px] w-full mx-auto' id=''>
          <h2 className="text-center text-5xl font-bold mb-10"><span>Podcasts </span></h2>
          <InfiniteMovingVideos
            videoLinks={PODCASTS}
            direction="left"
            speed="slow"
            pauseOnHover={true}
            className="custom-class"
          />
        </section>
        <section className='my-12 max-w-[1280px] w-full mx-auto' id=''>
          <h2 className="text-center text-5xl font-bold mb-10"><span>Product Explainer Videos</span> </h2>
          <InfiniteMovingVideos
            videoLinks={Product_Explainer_Videos}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="custom-class"
          />
        </section>
        <section className='mt-12 max-w-[1280px] w-full mx-auto' id=''>
          <h2 className="text-center text-5xl font-bold mb-10"><span>Documentaries</span></h2>
          <InfiniteMovingVideos
            videoLinks={Documentaries}
            direction="left"
            speed="slow"
            pauseOnHover={true}
            className="custom-class"
          />
        </section>
      </div>
    </div>
  )
}
export default portfolio
