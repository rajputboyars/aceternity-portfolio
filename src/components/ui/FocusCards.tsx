"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-40 md:h-[170px] w-full transition-all duration-300 ease-out hover:shadow-[0px_0px_61px_-17px_rgba(53,51,205,1)]",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        width={200}
        height={170}
        className="w-full h-full absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/70 flex items-end py-2 px-4 transition-opacity duration-300",
          hovered !== index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => {
        const href = card.title.toLowerCase().replace(" ", "_")
        console.log(href);

        return (
          <Link href={`/portfolio#${href}`}
            key={card.title}
          >
            <Card
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          </Link>
        )
      })}
    </div>
  );
}
