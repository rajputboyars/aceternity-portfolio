import ReviewsCard from "./ui/ReviewsCard";

export function Reviews() {
  interface Review {
    name: string;
    title: string;
    text: string;
    rating: number; 
    image: string;
  }
  const reviews: Review[] = [
    {
      name: "Wiktor Romanowicz",
      title: "Online Sales Exits",
      text: "It was great working with Shubham!",
      rating: 5,
      image: "/images/reviews-section/Wiktor.jpeg",
    },
    {
      name: "Zach Dykes",
      title: "Be a light productions",
      text: "Working with Shubham has been a pleasure. He is talented, hardworking, and great at taking feedback to ensure success. If you need someone to elevate your visuals, he’s the one!",
      rating: 5,
      image: "/images/reviews-section/Zach.png",
    },
    {
      name: "Kaleb McCullough • 1st",
      title: "Fractional Sales consultant founder",
      text: "Shubham's video editing skills are top-notch, paired with smooth communication and fluent English. His talent, speed, and rigor are unmatched—I highly recommend him!",
      rating: 5,
      image: "/images/reviews-section/Kaleb.jpeg",
    },
    {
      name: "Michael Cunningham",
      title: "Course Academy",
      text: "Shubham's work exceeded expectations. His edits for my channel were well-received, showcasing his knowledge of trends and the education market. His motion graphic skills are perfect for custom animations!",
      rating: 5,
      image: "/images/reviews-section/Michael.png",
    },
    // {
    //   name: "John Doe",
    //   title: "Software Engineer",
    //   text: "This service was amazing! Highly recommend it.",
    //   rating: 5,
    //   image: "/images/reviews-section/Wiktor.jpeg",
    // },
    // {
    //   name: "Jane Smith",
    //   title: "Product Manager",
    //   text: "Great experience, but there's room for improvement.",
    //   rating: 4,
    //   image: "/images/reviews-section/Wiktor.jpeg",
    // },
  ];

  return (
    <div className="py-10 px-5">
      <h2 className="text-center  font-bold mb-10 md:text-5xl text-4xl">Customer <span className="text-[#c6a4e8]"> Reviews</span> </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <ReviewsCard key={index} review={review} />
        ))}
      </div>
    </div>
  )
}
