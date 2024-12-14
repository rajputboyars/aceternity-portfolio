"use client"
import { useState } from "react";

type User = {
  id: number;
  img: string;
  title: string;
  description: string;
};


type CardGridProps = {
  users: User[];
};


const CardGrid: React.FC<CardGridProps> = ({ users }) => {
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
