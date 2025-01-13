"use client";

import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex items-center py-6 px-6 sm:px-12 md:px-[72px] justify-between bg-gray-50 shadow-md">
      {/* Logo & Name */}
      <div className="flex items-center gap-2">
        <div className="text-teal-500 text-3xl">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M12 0L24 12L12 24L0 12L12 0ZM12 3.79L3.79 12L12 20.21L20.21 12L12 3.79Z" />
          </svg>
        </div>
        <span className="text-gray-900 text-2xl font-bold">
          Care2 Training
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-lg font-semibold">
        <Link
          className="text-gray-700 hover:text-teal-500 transition-colors"
          href="#about"
        >
          About
        </Link>
        <Link
          className="text-gray-700 hover:text-teal-500 transition-colors"
          href="#services"
        >
          Services
        </Link>
        <Link
          className="text-gray-700 hover:text-teal-500 transition-colors"
          href="#faqs"
        >
          FAQs
        </Link>
        <Link
          className="text-gray-700 hover:text-teal-500 transition-colors"
          href="#contact"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 right-0 bg-white shadow-lg z-50`}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          <Link
            className="text-gray-700 hover:text-teal-500 transition-colors"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-gray-700 hover:text-teal-500 transition-colors"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-gray-700 hover:text-teal-500 transition-colors"
            href="#faqs"
          >
            FAQs
          </Link>
          <Link
            className="text-gray-700 hover:text-teal-500 transition-colors"
            href="#contact"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Contact Info */}
      <div className="hidden md:flex items-center gap-2 text-gray-700">
        <button className="px-6 py-2 bg-[#00C389] text-white rounded-lg">
          Book Consultation
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        <button
          className="text-teal-500 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
