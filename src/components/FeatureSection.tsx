
import { FocusCards } from "./ui/FocusCards";

export function FeatureSection() {
  const cards = [
    {
      title: "Short Videos",
      src: "/images/feature-section/long-video.webp",
    },
    {
      title: "Long Videos",
      src: "/images/feature-section/longvideos.webp",
    },
    {
      title: "Podcasts",
      src: "/images/feature-section/Short-video.webp",
    },
    {
      title: "VSLs Thumbnail",
      src: "/images/feature-section/youtube.webp",
    },
  ];

  return <FocusCards cards={cards} />;
}
