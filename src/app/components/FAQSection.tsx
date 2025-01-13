"use client";

import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import img from "../../assets/questions.jpg";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    0: true, // Open the first FAQ by default
  });

  const faqs: FAQItem[] = [
    {
      question: "What Is Watch? How It Works?",
      answer:
        "Branded search is, quite simply, results shown when you search for your brand name. Whether you are a new company or a big fish, you will want to rank number one for your branded search.",
    },
    {
      question: "How The Watch Is Made?",
      answer:
        "Branded search is, quite simply, results shown when you search for your brand name. Whether you are a new company or a big fish, you will want to rank number one for your branded search.",
    },
    {
      question: "Can I Swap Out The Watch Band?",
      answer:
        "Branded search is, quite simply, results shown when you search for your brand name. Whether you are a new company or a big fish, you will want to rank number one for your branded search.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="md:py-16 py-8 px-6 sm:px-12 md:px-[72px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image Section */}
        <div className="relative">
          <div className="absolute -left-8 top-1/4">
            <div className="w-16 h-16 grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-emerald-500" />
              ))}
            </div>
          </div>
          <div className="rounded-full overflow-hidden shadow-lg">
            <Image
              src={img}
              alt="Person working on laptop"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-emerald-500 text-lg font-bold mb-6">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <h3 className="text-3xl sm:text-4xl  md:text-5xl font-bold text-navy-900 leading-tight">
              Got Questions? <br /> We Have Got Answers.
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b-2 border-gray-200 pb-4"
                onClick={() => toggleItem(index)}
              >
                {/* Question */}
                <div className="flex justify-between items-center w-full text-left cursor-pointer">
                  <span className="text-lg sm:text-xl font-medium text-navy-900">
                    {faq.question}
                  </span>
                  {openItems[index] ? (
                    <Minus className="h-6 w-6 text-emerald-500" />
                  ) : (
                    <Plus className="h-6 w-6 text-emerald-500" />
                  )}
                </div>

                {/* Answer */}
                {openItems[index] && (
                  <div className="pt-4 text-gray-600 text-base sm:text-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
