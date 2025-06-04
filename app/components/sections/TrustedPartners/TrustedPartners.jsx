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
          <h2 className="font-riosark  text-2xl sm:text-2xl md:text-3xl lg:text-4xl  font-normal text-white text-center mb-10 sm:mb-12 md:mb-16 leading-tight">
  Trusted by thousands of forex & crypto hub worldwide
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