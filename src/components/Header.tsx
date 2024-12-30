"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/#about">
            <Image
            src={"/images/logo/logo.jpg"}
            alt="logo"
            width={30}
            height={10}
            className="w-full h-full"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/#about">
            <p className="hover:text-secondary transition">Home</p>
          </Link>
          <Link href="/#services">
            <p className="hover:text-secondary transition">Services</p>
          </Link>
          <Link href="/#clients">
            <p className="hover:text-secondary transition">Clients</p>
          </Link>
          <Link href="/#reviews">
            <p className="hover:text-secondary transition">Reviews</p>
          </Link>
          <Link href="/#faq">
            <p className="hover:text-secondary transition">FAQ</p>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Open Menu"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu?.classList.toggle("hidden");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-black text-white px-6 py-4"
      >
        <Link href="/#about">
          <p className="block py-2 hover:text-secondary transition">Home</p>
        </Link>
        <Link href="/#services">
          <p className="block py-2 hover:text-secondary transition">Services</p>
        </Link>
        <Link href="/#clients">
          <p className="block py-2 hover:text-secondary transition">Clients</p>
        </Link>
        <Link href="/#reviews">
          <p className="block py-2 hover:text-secondary transition">Reviews</p>
        </Link>
        <Link href="/#faq">
          <p className="block py-2 hover:text-secondary transition">FAQ</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
