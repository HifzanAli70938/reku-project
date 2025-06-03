'use client';

import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import StripeBackground from '@/app/components/common/StripeBackground'
import ScrollReveal from '@/app/components/common/ScrollReveal';
import Image from 'next/image';

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogData = [
    {
      id: 1,
      image: '/assets/blog1.png',
      title: 'WEEKLY MARKET OUTLOOKS',
      description: 'Get comprehensive weekly market analysis, key insights, and our look to what\'s next week.'
    },
    {
      id: 2,
      image: '/assets/blog2.png',
      title: 'STRATEGY DEEP DIVES',
      description: 'Explore advanced trading strategies, risk management frameworks, and psychological insights used by successful traders.'
    },
    {
      id: 3,
      image: '/assets/blog3.png',
      title: 'Tool Tutorials & Reviews',
      description: 'Discover the latest trading tools, expert platform rule education, and custom indicators with step-by-step guides.'
    },
    {
      id: 4,
      image: '/assets/blog4.jpg',
      title: 'MARKET ANALYSIS',
      description: 'Deep dive into current market trends and technical analysis with expert insights.'
    },
    {
      id: 5,
      image: '/assets/blog5.jpg',
      title: 'TRADING PSYCHOLOGY',
      description: 'Master the mental game of trading with proven psychological techniques and mindset strategies.'
    },
    {
      id: 6,
      image: '/assets/blog6.jpg',
      title: 'RISK MANAGEMENT',
      description: 'Learn essential risk management principles to protect your capital and maximize returns.'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 3 >= blogData.length ? 0 : prev + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 3 < 0 ? Math.max(0, blogData.length - 3) : prev - 3
    );
  };

  const visibleBlogs = blogData.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative bg-[#130D1B] py-12 sm:py-16 px-4">
      <StripeBackground />
      {/* Header Section */}
      <ScrollReveal direction="down" delay={0.2}>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mb-3 sm:mb-4">
            WHAT OUR MEMBERS
          </h2>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mb-4 sm:mb-6">
            ARE SAYING
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Real traders. Real growth. Real results. Here's what members of FX Utopia have to say 
            about their experience.
          </p>
        </div>
      </ScrollReveal>

      {/* Blog Cards Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <ScrollReveal direction="left" delay={0.4}>
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
          >
            <IoChevronBack className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </ScrollReveal>
        
        <ScrollReveal direction="right" delay={0.4}>
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
          >
            <IoChevronForward className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </ScrollReveal>

        {/* Blog Section Card */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mx-4 sm:mx-16 p-6 sm:p-16 rounded-2xl bg-gradient-to-br from-purple-950 via-purple-900 to-fuchsia-800 text-white shadow-lg">
            {/* Blog Section Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
                FROM THE FX UTOPIA BLOG
              </h3>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {visibleBlogs.map((blog, index) => (
                <ScrollReveal key={blog.id} direction="up" delay={0.8 + index * 0.2}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform transition-all duration-500 hover:scale-105">
                    <div className="relative w-full h-40 sm:h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{blog.title}</h4>
                    <p className="text-gray-300 text-sm sm:text-base">{blog.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default BlogSection;