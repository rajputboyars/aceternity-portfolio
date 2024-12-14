"use client";
import { useState } from "react";

type User = {
    id: number;
    img: string; // Thumbnail image
    title: string;
    description: string;
    iframeSrc: string; // YouTube video link
};

type PortfolioCardGridProps = {
    users: User[];
};

const PortfolioCardGrid: React.FC<PortfolioCardGridProps> = ({ users }) => {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-3 gap-6 p-8">
            {users.map((user, index) => (
                <div
                    onMouseEnter={() => setPlayingIndex(index)}
                    onMouseLeave={() => setPlayingIndex(null)}
                    key={user.id}
                    className={`relative flex flex-col items-center border-[#0504a5] border p-2 rounded-lg transform transition-all duration-500 shadow-[#0504a5] ${playingIndex === index ? "shadow-2xl scale-105" : "shadow-md"
                        }`}
                >
                    <iframe
                        src={user.iframeSrc}
                        title={user.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-40 rounded mb-4"
                    />
                </div>
            ))}
        </div>
    );
};

export default PortfolioCardGrid;
