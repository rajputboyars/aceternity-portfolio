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
    question: "What is your return policy?",
    answer:
      "You can return any item within 30 days of purchase as long as it is in its original condition and packaging.",
  },
  {
    id: 2,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping fees and delivery times vary by location.",
  },
  {
    id: 3,
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website.",
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, PayPal, and other secure payment methods, depending on your location.",
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
