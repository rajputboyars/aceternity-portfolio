import PortfolioCardGrid from '@/components/ui/PortfolioCardGrid';
import Link from 'next/link'
import React from 'react'


const SHORT_VIDEOS = [
  {
    id: 1,
    img: "/thumbnail1.jpg",
    title: "Video 1",
    description: "Description for Video 1",
    iframeSrc: "https://www.youtube.com/embed/Hvr9pbdwHDE?si=TswN9Iy6ECG5nRZZ",
  },
  {
    id: 2,
    img: "/thumbnail2.jpg",
    title: "Video 2",
    description: "Description for Video 2",
    iframeSrc: "https://www.youtube.com/embed/Hvr9pbdwHDE?si=TswN9Iy6ECG5nRZZ",
  },
  {
    id: 3,
    img: "/thumbnail3.jpg",
    title: "Video 3",
    description: "Description for Video 3",
    iframeSrc: "https://www.youtube.com/embed/Hvr9pbdwHDE?si=TswN9Iy6ECG5nRZZ",
  },
];
const LONG_VIDEOS = [
  {
    id: 1,
    img: "/thumbnail1.jpg",
    title: "Video 1",
    description: "Description for Video 1",
    iframeSrc: "https://www.youtube.com/embed/Hvr9pbdwHDE?si=TswN9Iy6ECG5nRZZ",
  },
  {
    id: 2,
    img: "/thumbnail2.jpg",
    title: "Video 2",
    description: "Description for Video 2",
    iframeSrc: "https://www.youtube.com/embed/Hvr9pbdwHDE?si=TswN9Iy6ECG5nRZZ",
  },
  {
    id: 3,
    img: "/thumbnail3.jpg",
    title: "Video 3",
    description: "Description for Video 3",
    iframeSrc: "https://www.youtube.com/embed/Hvr9pbdwHDE?si=TswN9Iy6ECG5nRZZ",
  },
];
const PODCASTS = [
  {
    id: 1,
    img: "/thumbnail1.jpg",
    title: "Video 1",
    description: "Description for Video 1",
    iframeSrc: "https://www.youtube.com/embed/Hvr9pbdwHDE?si=TswN9Iy6ECG5nRZZ",
  },
  {
    id: 2,
    img: "/thumbnail2.jpg",
    title: "Video 2",
    description: "Description for Video 2",
    iframeSrc: "https://www.youtube.com/embed/Hvr9pbdwHDE?si=TswN9Iy6ECG5nRZZ",
  },
  {
    id: 3,
    img: "/thumbnail3.jpg",
    title: "Video 3",
    description: "Description for Video 3",
    iframeSrc: "https://www.youtube.com/embed/Hvr9pbdwHDE?si=TswN9Iy6ECG5nRZZ",
  },
];
const VSLS_THUMBNAIL = [
  {
    id: 1,
    img: "/thumbnail1.jpg",
    title: "Video 1",
    description: "Description for Video 1",
    iframeSrc: "https://www.youtube.com/embed/Hvr9pbdwHDE?si=TswN9Iy6ECG5nRZZ",
  },
  {
    id: 2,
    img: "/thumbnail2.jpg",
    title: "Video 2",
    description: "Description for Video 2",
    iframeSrc: "https://www.youtube.com/embed/Hvr9pbdwHDE?si=TswN9Iy6ECG5nRZZ",
  },
  {
    id: 3,
    img: "/thumbnail3.jpg",
    title: "Video 3",
    description: "Description for Video 3",
    iframeSrc: "https://www.youtube.com/embed/Hvr9pbdwHDE?si=TswN9Iy6ECG5nRZZ",
  },
];
const portfolio = () => {
  return (
    <div className='bg-black'>
      <div className='max-w-7xl m-auto'>
        <Link href={"/"} className='py-2 px-4 border text-[#fff] border-[#0504a5] rounded-[8px] ml-[32px] cursor-pointer inline-block mt-[32px] transition-all hover:shadow-[0px_4px_6px_1px_rgba(5,4,165,1)]'> 👈 Back To Home</Link>
        <section className='my-12 max-w-[1280px] w-full mx-auto'>
          <h2 className="text-center text-5xl font-bold mb-10"><span className="text-[#c6a4e8]">Short</span> Videos </h2>
          <PortfolioCardGrid users={SHORT_VIDEOS} />
        </section>
        <section>
          <h2 className="text-center text-5xl font-bold mb-10"><span className="text-[#c6a4e8]">Long</span> Videos </h2>
          <PortfolioCardGrid users={LONG_VIDEOS} />
        </section>
        <section>
          <h2 className="text-center text-5xl font-bold mb-10"><span className="text-[#c6a4e8]">Pod</span>casts </h2>
          <PortfolioCardGrid users={PODCASTS} />
        </section>
        <section>
          <h2 className="text-center text-5xl font-bold mb-10"><span className="text-[#c6a4e8]">VSLs</span> Thumbnail</h2>
          <PortfolioCardGrid users={VSLS_THUMBNAIL} />
        </section>
      </div>
    </div>
  )
}
export default portfolio
