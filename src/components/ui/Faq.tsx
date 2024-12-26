"use client"
// components/FAQ.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type FAQItem = {
  id:number;
  question: string;
  answer: string;
};

const FAQ_DATA:FAQItem[] = [
  {
    id: 1,
    question: "What makes Oneup Creatives different from other agencies?",
    answer:
      "At Oneupcreatives, we bring all your video editing needs under one roof. We do everything from short-form social media clips and long-form YouTube content to professional LinkedIn videos, engaging podcasts, and impactful product launch videos. With flexible plans tailored to you, we’re here to deliver creativity, quality, and a personal touch that brings your vision to life.",
  },
  {
    id: 2,
    question: "Do you offer sample edits or trials?",
    answer:
      "Due to our commitment to maintaining high standards and delivering top-quality work, we currently don’t offer trial edits. However, we’re dedicated to ensuring your satisfaction and will work on your videos until they meet your expectations.",
  },
  {
    id: 3,
    question: "What is the turnaround time for video?",
    answer:
      "The turnaround time for videos depends on the type of project and typically ranges from 1 to 4 days. If you have an urgent need, we also offer fast delivery options to meet your deadlines.",
  },
  {
    id: 4,
    question: "What are the commercials?",
    answer:
      "At Oneupcreatives, we offer unique credit-based plans to make video editing simple and cost-effective. One credit equals one video edit, and we have tailored plans for long-form content, short-form videos, and podcasts. Credits are valid for 6 months, so you’re not tied to a monthly retainer, helping you save money while maintaining flexibility for your projects.",
  },
  {
    id: 5,
    question: "What mode of payment do you accept?",
    answer:
      "We usually prefer payments through Wise for its simplicity and convenience, but we also accept payments via Stripe to offer more flexibility for our clients.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="space-y-4">
        {FAQ_DATA.map((item, index) => (
          <div
            key={index}
            className="border border-secondaryLight rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="w-full text-left p-4 text-white hover:bg-gray-100 hover:bg-opacity-10 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-white">{item.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4  text-white">
                {item.answer}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
