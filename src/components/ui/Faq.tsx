"use client"
// components/FAQ.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'What is Next.js?',
    answer: 'Next.js is a React framework for building fast and user-friendly web applications.',
  },
  {
    question: 'What is Tailwind CSS?',
    answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.',
  },
  {
    question: 'What is TypeScript?',
    answer: 'TypeScript is a strongly typed programming language that builds on JavaScript.',
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
        {faqData.map((item, index) => (
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
