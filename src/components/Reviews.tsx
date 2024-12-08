import ReviewsCard from "./ui/ReviewsCard";

export function Reviews() {
  interface Review {
    name: string;
    title: string;
    text: string;
    rating: number; // Ensure it's a number between 1 and 5
    image: string;
  }
  const reviews: Review[] = [
    {
      name: "John Doe",
      title: "Software Engineer",
      text: "This service was amazing! Highly recommend it.",
      rating: 5,
      image: "/john-doe.jpg",
    },
    {
      name: "Jane Smith",
      title: "Product Manager",
      text: "Great experience, but there's room for improvement.",
      rating: 4,
      image: "/jane-smith.jpg",
    },
    {
      name: "John Doe",
      title: "Software Engineer",
      text: "This service was amazing! Highly recommend it.",
      rating: 5,
      image: "/john-doe.jpg",
    },
    {
      name: "Jane Smith",
      title: "Product Manager",
      text: "Great experience, but there's room for improvement.",
      rating: 4,
      image: "/jane-smith.jpg",
    },
    {
      name: "John Doe",
      title: "Software Engineer",
      text: "This service was amazing! Highly recommend it.",
      rating: 5,
      image: "/john-doe.jpg",
    },
    {
      name: "Jane Smith",
      title: "Product Manager",
      text: "Great experience, but there's room for improvement.",
      rating: 4,
      image: "/jane-smith.jpg",
    },
  ];  
  
  return(
    <div className="min-h-screen py-10">
    <h1 className="text-center text-2xl font-bold mb-8">Customer Reviews</h1>
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <ReviewsCard key={index} review={review} />
      ))}
    </div>
  </div>
  ) 
}
