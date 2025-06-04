'use client'
import Image from 'next/image';
import ScrollReveal from '@/app/components/common/ScrollReveal';

const WhySection = () => {
  return (
    <section className="bg-[#130D1B] relative py-12 sm:py-16 md:py-20" id="why">
      <div className="container mx-auto px-4 relative z-10">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 sm:mb-12 lg:mb-16 gap-6 lg:gap-8">
          <ScrollReveal direction="left" delay={0.2}>
            <h2 className="font-[var(--font-orbitron)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
              WHY FX UTOPIA?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.4}>
            <p className="text-gray-300 lg:max-w-[50%] text-base sm:text-lg leading-relaxed">
              Unlock your trading potential with a platform designed for long-term growth and real results. Whether you're just starting out or scaling up, FX Utopia gives you the tools, knowledge and support to succeed.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Global Trading Community Card */}
          <ScrollReveal direction="up" delay={0.6}>
            <div className="bg-gradient-to-r from-[#2e0059] via-[#1e0040] to-[#12002a] rounded-3xl p-6 backdrop-blur-sm h-[300px] w-[300px] mx-auto flex flex-col transition-shadow duration-500 ease-out hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer">
              <div className="mb-auto">
                <Image 
                  src="/assets/global.png"
                  alt="Global"
                  width={40}
                  height={40}
                  className="mb-6"
                />
              </div>
              <div>
                <h3 className="font-[var(--font-orbitron)] text-2xl font-bold text-white mb-3 uppercase tracking-wider leading-tight">
                  GLOBAL TRADING COMMUNITY
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Connect with traders worldwide. Share, learn, and grow together.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Education Card */}
          <ScrollReveal direction="up" delay={0.8}>
            <div className="bg-gradient-to-r from-[#2e0059] via-[#1e0040] to-[#12002a] rounded-3xl p-6 backdrop-blur-sm h-[300px] w-[300px] mx-auto flex flex-col transition-shadow duration-500 ease-out hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer">
              <div className="mb-auto">
                <Image 
                  src="/assets/empower.png"
                  alt="Education"
                  width={40}
                  height={40}
                  className="mb-6"
                />
              </div>
              <div>
                <h3 className="font-[var(--font-orbitron)] text-2xl font-bold text-white mb-3 uppercase tracking-wider leading-tight">
                  EDUCATION THAT EMPOWERS
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Learn Forex and Crypto with expert-led courses, live sessions, and easy-to-follow guides.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Reviews Card */}
          <ScrollReveal direction="up" delay={1.0}>
            <div className="bg-gradient-to-r from-[#2e0059] via-[#1e0040] to-[#12002a] rounded-3xl p-6 backdrop-blur-sm h-[300px] w-[300px] mx-auto flex flex-col transition-shadow duration-500 ease-out hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer">
              <div className="mb-auto">
                <Image 
                  src="/assets/insight.png"
                  alt="Reviews"
                  width={40}
                  height={40}
                  className="mb-6"
                />
              </div>
              <div>
                <h3 className="font-[var(--font-orbitron)] text-2xl font-bold text-white mb-3 uppercase tracking-wider leading-tight">
                  HONEST REVIEWS & INSIGHTS
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Get unbiased feedback on brokers, tools, and services — from real traders.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Marketplace Card */}
          <ScrollReveal direction="up" delay={1.2}>
            <div className="bg-gradient-to-r from-[#2e0059] via-[#1e0040] to-[#12002a] rounded-3xl p-6 backdrop-blur-sm h-[300px] w-[300px] mx-auto flex flex-col transition-shadow duration-500 ease-out hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer">
              <div className="mb-auto">
                <Image 
                  src="/assets/trade.png"
                  alt="Marketplace"
                  width={40}
                  height={40}
                  className="mb-6"
                />
              </div>
              <div>
                <h3 className="font-[var(--font-orbitron)] text-2xl font-bold text-white mb-3 uppercase tracking-wider leading-tight">
                  TRADER-FOCUSED MARKETPLACE
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Access vetted signals, bots, mentors and tools optimized to help you win.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhySection; 