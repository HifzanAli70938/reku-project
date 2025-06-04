'use client'
import React from 'react';
import Currency from '@/app/components/common/Currency/Currency';
import ScrollReveal from '@/app/components/common/ScrollReveal';

const TrustedPartners = () => {
  const currencies = [
    'currency1.png',
    'currency2.png',
    'currency3.png',
    'currency4.png',
    'currency5.png',
    'currency6.png',
    'currency7.png',
    'currency8.png',
    'currency9.png',
    'currency10.png',
  ];

  return (
    <section className="relative w-full bg-gradient-main">
      <div className="relative z-10 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="down" delay={0.2}>
            <h2 className="font-riosark text-[72px] font-normal text-white text-center mb-16">
              Trusted by thousands<br />of forex & crypto<br />hub worldwide
            </h2>
          </ScrollReveal>

          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {currencies.map((currency, index) => (
              <ScrollReveal 
                key={currency} 
                direction="up" 
                delay={0.2 + index * 0.1}
              >
                <Currency
                  src={currency}
                  isLarge={index === 4}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners; 