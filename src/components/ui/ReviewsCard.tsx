import React from "react";

interface Review {
  name: string;
  title: string;
  text: string;
  rating: number; // Ensure it's a number between 1 and 5
  image: string; // URL or path to the image
}

interface ReviewsCardProps {
  review: Review;
}

const ReviewsCard: React.FC<ReviewsCardProps> = ({ review }) => {
  const { name, title, text, rating, image } = review;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center space-y-4 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Reviewer Image */}
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
        <img src={image} alt={`${name}'s picture`} className="w-full h-full object-cover" />
      </div>

      {/* Reviewer Name */}
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

      {/* Reviewer Title */}
      <p className="text-sm text-gray-500">{title}</p>

      {/* Review Text */}
      <p className="text-gray-600 text-center">{text}</p>

      {/* Star Rating */}
      <div className="flex">
        {Array.from({ length: rating }, (_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927C9.322 2.16 10.678 2.16 10.951 2.927l1.367 3.971a1 1 0 00.95.69h4.227c.926 0 1.31 1.194.564 1.75l-3.42 2.483a1 1 0 00-.364 1.118l1.367 3.971c.273.767-.678 1.398-1.364.931l-3.42-2.483a1 1 0 00-1.176 0l-3.42 2.483c-.686.467-1.637-.164-1.364-.931l1.367-3.971a1 1 0 00-.364-1.118L2.62 9.338c-.746-.556-.362-1.75.564-1.75h4.227a1 1 0 00.95-.69l1.367-3.971z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default ReviewsCard;
