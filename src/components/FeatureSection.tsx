
import { FocusCards } from "./ui/FocusCards";

export function FeatureSection() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/images/feature-section/long-video.webp",
    },
    {
      title: "Valley of life",
      src: "/images/feature-section/longvideos.webp",
    },
    {
      title: "Sala behta hi jayega",
      src: "/images/feature-section/Short-video.webp",
    },
    {
      title: "Camping is for pros",
      src: "/images/feature-section/youtube.webp",
    },
  ];

  return <FocusCards cards={cards} />;
}
