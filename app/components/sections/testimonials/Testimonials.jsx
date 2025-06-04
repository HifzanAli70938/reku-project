'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const testimonials = [
  {
    id: 1,
    text: 'This is a fantastic platform! The level of expertise and dedication shown by the team is unmatched. No fake signals, .',
    name: 'CHLOE B.',
    role: 'Amateur Trader',
    image: '/assets/client1.png',
  },
  {
    id: 2,
    text: 'The education here completely changed the game for me. The comprehensive courses and real-time market analysis have given me the confidence to make informed trading decisions. .',
    name: 'SAMANTHA T.',
    role: 'Beginner Trader',
    image: '/assets/client2.png',
  },
  {
    id: 3,
    text: 'Its the only place I trust for signals. The accuracy and timing of their trade calls are remarkable. My win rate has never been better, ',
    name: 'DAVID M.',
    role: 'Swing Trader',
    image: '/assets/client3.png',
  },
  {
    id: 4,
    text: 'The analysis and support are absolutely top-notch. What sets them apart is their commitment to education and transparency. Every trade call comes with detailed analysis and risk management strategies.',
    name: 'PRISANA V.',
    role: 'Investor',
    image: '/assets/client4.png',
  },
  {
    id: 5,
    text: 'The copy trades are not just profitable but completely transparent. I appreciate how they explain every trade setup and the reasoning behind each decision.',
    name: 'ARJUN K.',
    role: 'Full-Time Trader',
    image: '/assets/client5.png',
  },
  {
    id: 6,
    text: 'This platform is a true game-changer for anyone new to trading. The step-by-step guidance, risk management tools, and supportive community have helped me avoid common ',
    name: 'LISA W.',
    role: 'Beginner',
    image: '/assets/client6.png',
  },
  {
    id: 7,
    text: 'Finally found a platform that delivers on its promises. The combination of expert analysis, educational resources, and real-time support has dramatically improved my trading performance. ',
    name: 'TOMMY G.',
    role: 'Scalper',
    image: '/assets/client7.png',
  },
  {
    id: 8,
    text: 'Clear, actionable signals every day! The technical analysis provided is thorough and easy to understand. Their market insights have helped me spot opportunities I would have missed otherwise.',
    name: 'MAYA D.',
    role: 'Technical Analyst',
    image: '/assets/client8.png',
  },
  {
    id: 9,
    text: 'The support team is absolutely incredible - 10/10! They go above and beyond to ensure every member succeeds. Whether youre stuck with a trade or need help with strategy',
    name: 'JORDAN P.',
    role: 'Beginner',
    image: '/assets/client9.png',
  },
  {
    id: 10,
    text: 'Perfect platform for long-term growth. Their focus on sustainable trading strategies and risk management has helped me build a stable trading portfolio.',
    name: 'FIONA L.',
    role: 'Investor',
    image: '/assets/client10.png',
  },
];

const Testimonials = () => {
  const [centerIndex, setCenterIndex] = useState(2); // start with 3rd testimonial centered

  const visibleCards = 5; // Show exactly 5 cards
  const half = Math.floor(visibleCards / 2);

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2f] to-[#2a1f47] text-white">
   
      
      <div className="w-full px-4 relative z-10">
        {/* Header content */}
        <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1400px] mx-auto p-16">
        <h2 className="font-riosark text-2xl sm:text-2xl md:text-3xl lg:text-4xl  text-white mb-6 lg:mb-0 lg:max-w-2xl leading-tight text-center lg:text-left">
  JOIN A GLOBAL TRADING <br className="hidden md:block" />
  AND CRYPTO COMMUNITY
</h2>

          
          <div className="w-full lg:max-w-md">
          <p className="font-satoshi text-base sm:text-lg md:text-xl text-white/70 mb-6 text-center lg:text-left leading-relaxed">
  Join thousands of satisfied traders who have transformed their trading journey with our community
</p>

            <div className="flex justify-center lg:justify-start">
              <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#A84BC2] to-[#6C3ECB] rounded-full text-white transition-all hover:from-[#A84BC2]/90 hover:to-[#6C3ECB]/90 backdrop-blur-sm border border-white/10 shadow-[0_4px_12px_0_rgba(31,38,135,0.37)]">
                Join Community
              </button>
            </div>
          </div>
        </div>

        {/* Global image */}
        <div className="w-full  relative flex justify-center items-center h-[500px]">
          <Image 
            src="/assets/global2.png"
            alt="Global Trading"
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Testimonials carousel */}
        <div className="w-full max-w-7xl mx-auto h-[400px] flex items-center justify-center mt-20" >
          <div className="relative w-full h-full flex justify-center items-center" style={{ perspective: '1000px' }}>
            {testimonials.map((t, i) => {
              let offset = i - centerIndex;
              if (offset < -half) offset += testimonials.length;
              if (offset > half) offset -= testimonials.length;

              if (Math.abs(offset) > half) return null;

              // Increased spacing to add 20px margin between cards
              const baseSpacing = 350; 
              const translateX = offset * baseSpacing;
              
              // 3D perspective positioning logic - same size and opacity for all
              let translateY = 0;
              let rotateY = 0;
              let rotateZ = 0;
              let scale = 1; // Same scale for all cards
              let opacity = 1; // Same opacity for all cards
              let translateZ = 0;

              if (offset === 0) {
                // Center card: perfectly centered, no rotation
                translateY = 0;
                rotateY = 0;
                rotateZ = 0;
                translateZ = 0;
              } else if (Math.abs(offset) === 1) {
                // Near cards: slight perspective but keep them vertically centered
                translateY = 30;
                rotateZ = offset * 15;   // Slight Z rotation
                translateZ = -50;
              } else if (Math.abs(offset) === 2) {
                // Edge cards: more pronounced 3D effect but still vertically centered
                translateY = 110; 
                rotateZ = offset * 8;
                translateZ = -100;
              }

              const zIndex = 100 - Math.abs(offset);

              return (
                <div
                  key={t.id}
                  className={`absolute transition-all duration-700 ease-out m-10`}
                  style={{
                    transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
                    transformStyle: 'preserve-3d',
                    
                    opacity,
                  }}
                >
                  <div className={`w-64 h-72 rounded-2xl p-4 shadow-2xl ${
                    offset === 0 
                      ? 'bg-gradient-to-b from-[#2B1F5C] via-[#432B8C] to-[#4B2A84] shadow-2xl border border-purple-500/30 backdrop-blur-sm' 
                      : 'bg-[#121222] shadow-xl'
                  } backdrop-blur-sm relative`}>
                    <FaQuoteRight className="absolute top-3 right-6 text-[#007BFF] text-xl" />
                    <div className="pt-8">
                      <p className="text-sm h-32 overflow-hidden mb-2 font-satoshi">{t.text}</p>
                      <div className="flex text-yellow-400 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar key={i} className="text-sm" />
                        ))}
                      </div>
                      <div className="border-t border-gray-700 my-2"></div>
                      <div className="flex items-center gap-3 mt-2">
                        <Image
                          src={t.image}
                          alt={t.name}
                          width={32}
                          height={32}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-riosark font-semibold">{t.name}</p>
                          <p className="text-xs font-satoshi">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Navigation buttons positioned relative to center card */}
            <button
              className="absolute z-40 p-3 rounded-full transition-all duration-300 
              bg-gradient-to-br from-white/10 to-white/5
              hover:from-purple-600/80 hover:to-purple-700/80
              backdrop-blur-md
              shadow-[inset_2px_2px_1px_rgba(255,255,255,0.1),inset_-2px_-2px_1px_rgba(0,0,0,0.2),0_8px_32px_0_rgba(31,38,135,0.37)]
              border border-white/20"
              style={{ left: 'calc(50% - 200px)', top: '50%', transform: 'translateY(-50%)' }}
              onClick={handlePrev}
            >
              <HiChevronLeft className="text-white text-2xl" />
            </button>

            <button
              className="absolute z-40 p-3 rounded-full transition-all duration-300 
              bg-gradient-to-br from-white/10 to-white/5
              hover:from-purple-600/80 hover:to-purple-700/80
              backdrop-blur-md
              shadow-[inset_2px_2px_1px_rgba(255,255,255,0.1),inset_-2px_-2px_1px_rgba(0,0,0,0.2),0_8px_32px_0_rgba(31,38,135,0.37)]
              border border-white/20"
              style={{ right: 'calc(50% - 200px)', top: '50%', transform: 'translateY(-50%)' }}
              onClick={handleNext}
            >
              <HiChevronRight className="text-white text-2xl" />
            </button>
          </div>
        </div>

        {/* Added Heading and Paragraph Section */}
        <div className="text-center">
          <h2 className="text-white font-normal tracking-wide mb-3 sm:mb-4 font-riosark text-2xl sm:text-2xl md:text-3xl lg:text-4xl  leading-tight">
            WHAT OUR MEMBERS
          </h2>
          <h2 className="text-white font-normal tracking-wide text-2xl sm:text-2xl md:text-3xl lg:text-4xl  mb-4 sm:mb-6 font-riosark leading-tight">
            ARE SAYING
          </h2>
          <p className="text-gray-300  max-w-2xl mx-auto leading-relaxed px-4 font-satoshi font-normal">
            Real traders. Real growth. Real results. Here's what members of FX Utopia have to say 
            about their experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;