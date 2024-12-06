
import { FocusCards } from "./ui/FocusCards";

export function FeatureSection() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/images/feature-section/photo.webp",
    },
    {
      title: "Valley of life",
      src: "/images/feature-section/photo.webp",
    },
    {
      title: "Sala behta hi jayega",
      src: "/images/feature-section/photo.webp",
    },
    {
      title: "Camping is for pros",
      src: "/images/feature-section/photo.webp",
    },
  ];

  return <FocusCards cards={cards} />;
}
