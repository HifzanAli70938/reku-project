'use client'
import { useState } from 'react'
import Image from 'next/image'
import StripeBackground from '@/app/components/common/StripeBackground'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { FaStar } from 'react-icons/fa'
import ScrollReveal from '@/app/components/common/ScrollReveal'

const testimonialData = [
  {
    review: "I've been trading for years, but joining this community has taken my skills to another level. The signals are incredibly accurate!",
    rating: 5,
    name: "Sarah Johnson",
    profession: "Forex Trader",
    image: "/assets/client1.png"
  },
  {
    review: "The mentorship program here is outstanding. My portfolio has grown significantly since I started following their strategies.",
    rating: 5,
    name: "Michael Chen",
    profession: "Crypto Investor",
    image: "/assets/client2.png"
  },
  {
    review: "Best trading community I've ever been part of. The support and knowledge sharing is incredible.",
    rating: 5,
    name: "Emma Davis",
    profession: "Day Trader",
    image: "/assets/client3.png"
  },
  {
    review: "Their algorithmic tools have revolutionized my trading approach. Highly recommended!",
    rating: 5,
    name: "James Wilson",
    profession: "Algo Trader",
    image: "/assets/client4.png"
  },
  {
    review: "The educational resources and real-time support have been invaluable for my trading journey.",
    rating: 5,
    name: "Lisa Anderson",
    profession: "Stock Trader",
    image: "/assets/client5.png"
  },
  {
    review: "Incredible community with top-notch analysis and trading strategies.",
    rating: 5,
    name: "David Thompson",
    profession: "Investment Analyst",
    image: "/assets/client6.png"
  },
  {
    review: "The signal accuracy and community support have exceeded my expectations.",
    rating: 5,
    name: "Rachel Martinez",
    profession: "Options Trader",
    image: "/assets/client7.png"
  },
  {
    review: "Best investment I've made for my trading career. The insights are priceless.",
    rating: 5,
    name: "Kevin Zhang",
    profession: "Portfolio Manager",
    image: "/assets/client8.png"
  },
  {
    review: "The technical analysis and market insights have transformed my trading approach.",
    rating: 5,
    name: "Sophie Turner",
    profession: "Technical Analyst",
    image: "/assets/client9.png"
  },
  {
    review: "Outstanding platform for both beginners and experienced traders.",
    rating: 5,
    name: "Alex Parker",
    profession: "Futures Trader",
    image: "/assets/client10.png"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length)
  }

  const getVisibleTestimonials = () => {
    const prev = (currentIndex - 1 + testimonialData.length) % testimonialData.length
    const next = (currentIndex + 1) % testimonialData.length
    return [prev, currentIndex, next]
  }

  return (
    <section className="relative bg-[#130D1B] py-12 sm:py-16">
      <StripeBackground />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header content */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 sm:mb-12">
          <ScrollReveal direction="left" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 lg:mb-0">
              JOIN A GLOBAL TRADING <br/>AND CRYPTO COMMUNITY
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.4}>
            <div className="w-full lg:max-w-md">
              <p className="text-white/70 mb-4 text-center lg:text-left">
                Join thousands of satisfied traders who have transformed their trading journey with our community
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#A84BC2] to-[#6C3ECB] rounded-full text-white transition-all hover:from-[#A84BC2]/90 hover:to-[#6C3ECB]/90 backdrop-blur-sm border border-white/10 shadow-[0_4px_12px_0_rgba(31,38,135,0.37)]">
                  Join Community
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Global image */}
        <ScrollReveal direction="down" delay={0.6}>
          <div className="relative w-full mb-8 sm:mb-12">
            <div className="w-full max-w-4xl mx-auto relative">
              <Image 
                src="/assets/global2.png"
                alt="Global Trading"
                width={1000}
                height={100}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials section */}
        <div className="relative flex justify-center items-center w-full min-h-[400px] sm:min-h-[450px] -mt-8 sm:-mt-12 lg:-mt-16">
          {/* Navigation Buttons */}
          <ScrollReveal direction="left" delay={0.4}>
            <div className="absolute left-0 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30">
              <button
                onClick={prevTestimonial}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
              >
                <IoChevronBack className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          </ScrollReveal>

          {/* Testimonial Cards Container */}
          <ScrollReveal direction="up" delay={0.8}>
            <div className="relative flex justify-center items-center w-full">
              {getVisibleTestimonials().map((index, i) => {
                const isLeft = i === 0;
                const isCenter = i === 1;
                const isRight = i === 2;
                
                return (
                  <div 
                    key={index}
                    className={`
                      w-[240px] sm:w-[280px] h-[280px] sm:h-[320px] absolute transition-all duration-300 ease-in-out
                      ${isCenter ? 'z-20' : 'z-10'}
                      ${isLeft ? 'transform -translate-x-[60%] sm:-translate-x-80 -translate-y-8 -rotate-12 scale-[0.85] sm:scale-90' : ''}
                      ${isCenter ? 'transform translate-x-0 translate-y-0 rotate-0 scale-100' : ''}
                      ${isRight ? 'transform translate-x-[60%] sm:translate-x-80 -translate-y-8 rotate-12 scale-[0.85] sm:scale-90' : ''}
                    `}
                    style={{
                      transformOrigin: isLeft ? 'bottom right' : isRight ? 'bottom left' : 'center'
                    }}
                  >
                    {/* Testimonial Card Content */}
                    <div className="bg-gradient-to-b from-[#2e0059] to-[#12002a] rounded-3xl p-4 sm:p-6 h-full flex flex-col justify-between backdrop-blur-sm border border-white/5 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.6)] hover:border-white/20 hover:from-[#3a006e] hover:to-[#1a003d] group">
                      {/* Profile Section */}
                      <div className="flex items-center gap-3 sm:gap-4 mb-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-white/20 transition-all duration-300">
                          <Image
                            src={testimonialData[index].image}
                            alt={testimonialData[index].name}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-base sm:text-lg group-hover:text-white/90 transition-colors duration-300">
                            {testimonialData[index].name}
                          </h4>
                          <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">
                            {testimonialData[index].profession}
                          </p>
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-300 text-sm sm:text-base mb-4 flex-grow group-hover:text-white/90 transition-colors duration-300">
                        {testimonialData[index].review}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                              i < testimonialData[index].rating
                                ? 'text-yellow-400 group-hover:text-yellow-300'
                                : 'text-gray-600 group-hover:text-gray-500'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right Navigation Button */}
          <ScrollReveal direction="right" delay={0.4}>
            <div className="absolute right-0 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30">
              <button
                onClick={nextTestimonial}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
              >
                <IoChevronForward className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Testimonials