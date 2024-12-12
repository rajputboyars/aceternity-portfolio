"use client"
import { useState } from "react";

type User = {
  id: number;
  img: string;
  title: string;
  description: string;
};

const users: User[] = [
  { id: 1, img: "/user1.jpg", title: "User 1", description: "Description 1" },
  { id: 2, img: "/user2.jpg", title: "User 2", description: "Description 2" },
  { id: 3, img: "/user3.jpg", title: "User 3", description: "Description 3" },
  { id: 4, img: "/user4.jpg", title: "User 4", description: "Description 4" },
  { id: 5, img: "/user5.jpg", title: "User 5", description: "Description 5" },
  { id: 6, img: "/user6.jpg", title: "User 6", description: "Description 6" },
  { id: 7, img: "/user7.jpg", title: "User 7", description: "Description 7" },
  { id: 8, img: "/user8.jpg", title: "User 8", description: "Description 8" },
  { id: 9, img: "/user9.jpg", title: "User 9", description: "Description 9" },
];

const CardGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-3 gap-6 p-8 ">
      {users.map((user, index) => (
        <div
          key={user.id}
          className={`relative flex flex-col items-center border-[#0504a5] border p-6 rounded-lg transform transition-all duration-500 shadow-[#0504a5] ${
            hoveredIndex === index ? "shadow-2xl scale-105" : "shadow-md"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={user.img}
            alt={user.title}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h3 className="text-lg font-bold mb-2">{user.title}</h3>
          <p className="text-gray-600 text-center">{user.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
