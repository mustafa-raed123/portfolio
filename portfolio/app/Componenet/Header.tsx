'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import portfolio from '@/public/portfolio.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={`bg-white dark:bg-gray-800 px-4 lg:px-6 py-2.5 w-full top-0 transition-all duration-300 z-10 ${isScrolled ? "shadow-md bg-opacity-90 fixed" : ""}`}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <div className="flex space-x-3">
            <Image src={portfolio} alt="Portfolio Image" width={35} height={35} quality={100} className="rounded-full" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Mustafa Raed
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            )}
          </button>

          {/* Navigation Menu */}
          <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col w-full lg:flex lg:w-auto lg:order-1`}>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item} onClick={() => setActiveItem(item)}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`block py-2 pr-4 pl-3 rounded lg:p-0 transition-all ${
                      activeItem === item ? "text-white bg-blue-600 lg:bg-transparent lg:text-blue-500" 
                      : "text-gray-700 hover:text-blue-500 dark:text-gray-400 dark:hover:text-white"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
