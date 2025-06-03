'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { IoChevronDown } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const duration = 1000;
      const start = window.pageYOffset;
      const end = section.getBoundingClientRect().top + window.pageYOffset;
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // Easing function for smooth deceleration
        const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
        
        window.scrollTo({
          top: start + (end - start) * easeOutCubic(progress),
          behavior: 'auto'
        });

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
      // Close sidebar after clicking a link on mobile
      setIsSidebarOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[15vh] bg-dark/95 backdrop-blur-sm w-full">
      <div className="w-full h-full px-4 sm:px-6 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between h-full relative w-full">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/assets/logo.png"
              alt="FX Utopia Logo"
              width={30}
              height={30}
              className="object-contain w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]"
            />
            <span className="text-white font-semibold text-lg sm:text-xl tracking-wide">FX UTOPIA</span>
          </div>

          {/* Navigation Items - Desktop */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-8 bg-dark-lighter rounded-full px-8 py-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="relative nav-link text-gray-400 hover:text-white transition-all duration-300 py-2 px-4 rounded-full group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-indigo-600/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 backdrop-blur-sm"></div>
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="relative nav-link text-gray-400 hover:text-white transition-all duration-300 py-2 px-4 rounded-full group flex items-center gap-1"
              >
                <span className="relative z-10">Community Forum</span>
                <IoChevronDown className="text-sm relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-indigo-600/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 backdrop-blur-sm"></div>
              </button>
              <button 
                onClick={() => scrollToSection('why')}
                className="relative nav-link text-gray-400 hover:text-white transition-all duration-300 py-2 px-4 rounded-full group flex items-center gap-1"
              >
                <span className="relative z-10">Education Center</span>
                <IoChevronDown className="text-sm relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-indigo-600/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 backdrop-blur-sm"></div>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="relative nav-link text-gray-400 hover:text-white transition-all duration-300 py-2 px-4 rounded-full group"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-indigo-600/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 backdrop-blur-sm"></div>
              </button>
            </div>
          </div>

          {/* Get Started Button - Desktop */}
          <button className="hidden md:block gradient-button">
            Get Started
          </button>

          {/* Hamburger Menu - Mobile */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className={`absolute md:relative right-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl p-2 hover:bg-white/10 rounded-lg transition-all duration-300 z-50 md:hidden ${
              isSidebarOpen ? 'opacity-0 invisible' : 'opacity-100 visible'
            }`}
            aria-label="Open menu"
          >
            <HiMenu className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white stroke-white" />
          </button>

          {/* Mobile Sidebar */}
          <div 
            className={`fixed inset-0 w-full md:hidden backdrop-blur-lg transition-all duration-300 ${
              isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            } z-40`}
            onClick={() => setIsSidebarOpen(false)}
          >
            {/* Sidebar Content */}
            <div 
              className={`absolute inset-y-0 right-0 w-full sm:w-[400px] bg-white/20 shadow-2xl transition-all duration-300 transform backdrop-blur-xl border-l border-white/20 ${
                isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className={`absolute top-6 right-4 sm:right-6 text-white text-2xl sm:text-3xl p-2 sm:p-3 hover:bg-white/10 rounded-full transition-all duration-300 transform hover:rotate-90 backdrop-blur-sm border border-white/10 z-50 ${
                  isSidebarOpen ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'
                }`}
              >
                <IoMdClose className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Mobile Navigation Items */}
              <div className="flex flex-col gap-4 sm:gap-6 pt-24 sm:pt-28 px-4 sm:px-8">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-left text-white/90 hover:text-white transition-all duration-300 py-4 px-6 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-white/10"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('community')}
                  className="text-left text-white/90 hover:text-white transition-all duration-300 py-4 px-6 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between"
                >
                  Community Forum
                  <IoChevronDown className="text-xl" />
                </button>
                <button 
                  onClick={() => scrollToSection('why')}
                  className="text-left text-white/90 hover:text-white transition-all duration-300 py-4 px-6 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between"
                >
                  Education Center
                  <IoChevronDown className="text-xl" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-white/90 hover:text-white transition-all duration-300 py-4 px-6 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-white/10"
                >
                  Contact Us
                </button>

                {/* Get Started Button - Mobile */}
                <button className="gradient-button mt-4 py-4 px-6 text-lg backdrop-blur-sm border border-white/10">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 