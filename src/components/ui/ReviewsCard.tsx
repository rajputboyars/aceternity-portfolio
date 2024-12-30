"use client";
import React, { useState } from "react";

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
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => setIsExpanded((prev) => !prev);

  return (
    <div className="border shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-8 items-center justify-left transform transition duration-300 hover:scale-105 hover:shadow-[0px_0px_61px_-17px_rgba(53,51,205,1)]">
      {/* Reviewer Image */}
      <div className="max-w-[63px] w-full h-16 rounded-full overflow-hidden border-2 border-blue-500">
        <img src={image} alt={`${name}'s picture`} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2" onClick={toggleText}>
        {/* Reviewer Name */}
        <h3 className="text-lg font-semibold">{name}</h3>

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

        {/* Reviewer Title */}
        <p className="text-sm">{title}</p>

        {/* Review Text */}
        <p className="text-sm"
          
        >
          {isExpanded ? text : text.substring(0, 40) + "... "}
          <span
            className="text-blue-500 cursor-pointer underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ReviewsCard;
