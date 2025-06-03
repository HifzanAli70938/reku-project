'use client'
import React from 'react';
import Image from 'next/image';
import Button from '@/app/components/common/Button';
import FloatingCard from './FloatingCard';
import StripeBackground from '@/app/components/common/StripeBackground';
import ScrollReveal from '@/app/components/common/ScrollReveal';

const Hero = () => {
  return (
    <section className="bg-[#130D1B] mt-[10vh] min-h-[90vh] relative overflow-hidden" id="hero">
      <StripeBackground />
      <div className="relative z-10 h-full flex items-center justify-center px-4 py-16 sm:py-20">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Text Content */}
          <ScrollReveal direction="down" delay={0.2}>
            <h2 className="text-[#E2E2E2] text-base sm:text-lg md:text-xl font-medium tracking-[0.2em] uppercase mb-2 sm:mb-3 md:mb-4">
              Welcome to the future of
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <h1 className="text-[clamp(28px,5vw,56px)] font-bold bg-gradient-to-r from-[#B57BFF] via-[#9747FF] to-[#7B2ABF] bg-clip-text text-transparent leading-tight mb-3 sm:mb-4 md:mb-6 px-4">
              Financial Freedom
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.6}>
            <p className="text-[#9CA3AF] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-4">
              At FX Utopia, we're building the most dynamic and empowering Forex & Crypto community on the planet. Whether you're just getting started or looking to sharpen your edge, our platform delivers everything you need to succeed.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.8}>
            <Button variant="purple" className="mb-6 md:mb-8 px-6 py-2 text-sm sm:text-base w-full sm:w-auto max-w-[280px]">
              Join The Community
            </Button>
          </ScrollReveal>

          {/* Banner Section with Cards */}
          <div className="relative mt-6 md:mt-10 flex justify-center w-full px-4 sm:px-6">
            <div className="relative w-full max-w-[900px] h-[200px] sm:h-[300px] md:h-[400px] mx-auto">
            <ScrollReveal direction="up" delay={0.4}>
              <Image
                src="/assets/Banner.png"
                alt="Trading Platform Banner"
                fill
                className="object-contain"
                priority
              />
 </ScrollReveal>
              {/* Floating Cards - Hidden on mobile, visible from sm up */}
              <div className="hidden sm:block absolute left-[-70px] sm:left-[-70px] top-[50%] transform -translate-y-1/2 scale-[0.6] sm:scale-75">
              <ScrollReveal direction="left" delay={0.6}>
                <FloatingCard
                  imageSrc="/assets/dlmaster1.png"
                  name="D1master"
                  stats="+1.41% $12,356"
                  cursorPosition="right"
                />
                 </ScrollReveal>
              </div>

              <div className="hidden sm:block absolute left-[15%] sm:left-[202px] top-[-10%] scale-[0.6] sm:scale-75">
              <ScrollReveal direction="up" delay={0.6}>
                <FloatingCard
                  imageSrc="/assets/bormley1.png"
                  name="Bormley"
                  stats="+2.15% $8,942"
                />
                   </ScrollReveal>
              </div>

              <div className="hidden sm:block absolute right-[10%] sm:right-[180px] top-[18%] transform -translate-y-1/2 scale-[0.6] sm:scale-75">
              <ScrollReveal direction="right" delay={0.6}> 
                <FloatingCard
                  imageSrc="/assets/marina1.png"
                  name="Marina B"
                  stats="+0.89% $5,621"
                  cursorPosition="left"
                />
                  </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 