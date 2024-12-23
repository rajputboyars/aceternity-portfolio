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
      title: "Growth@Skool.com",
      text: "It was great working with Shubham!",
      rating: 5,
      image: "/images/reviews-section/Wiktor.jpeg",
    },
    {
      name: "Zach Dykes",
      title: "Creative Marketing Specialist @ HIP Creative | On-Camera Host, Video Editor, Videographer",
      text: "Working with Shubham has been a pleasure. He is extremely talented and hardworking. Shubham is excellent at taking feedback and asking questions to ensure the project's success. If you're looking for someone who can elevate your visual game, he is the person you need.",
      rating: 5,
      image: "/images/reviews-section/Zach.png",
    },
    {
      name: "Kaleb McCullough • 1st",
      title: "Turning Closers Into Consultants",
      text: "Incredible video editing skills with incredibly smooth communication. It's hard to find an editor both with talent and fluent english that operates with the rigor and speed that Shubham does, I couldn't recommend him more highly",
      rating: 5,
      image: "/images/reviews-section/Kaleb.jpeg",
    },
    {
      name: "Michael Cunningham",
      title: "Online Educator | Content Creator | Video Marketing Expert",
      text: "I was very pleased with Shubham's work. The video he has edited on my channel and company channel is well received. He's aware of current trends and has knowledge of the education content market. His motion graphic skills are a great assets for someone who is looking for custom animations as well.",
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
    <div className="py-10">
      <h2 className="text-center text-5xl font-bold mb-10">Customer <span className="text-[#c6a4e8]"> Reviews</span> </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <ReviewsCard key={index} review={review} />
        ))}
      </div>
    </div>
  )
}
