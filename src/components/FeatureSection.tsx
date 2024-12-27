
import { FocusCards } from "./ui/FocusCards";

export function FeatureSection() {
  const cards = [
    {
      title: "Short Videos",
      src: "/images/feature-section/ShortFormThumbnail.jpg",
    },
    {
      title: "Long Videos",
      src: "/images/feature-section/LongForm.jpg",
    },
    {
      title: "Podcasts",
      src: "/images/feature-section/PodcastThumbnail.jpg",
    },
    {
      title: "VSLs Thumbnail",
      src: "/images/feature-section/ThumbnailDesigning.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
