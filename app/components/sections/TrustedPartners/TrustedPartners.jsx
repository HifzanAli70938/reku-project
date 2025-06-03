'use client'
import React from 'react';
import Currency from '@/app/components/common/Currency/Currency';
import StripeBackground from '@/app/components/common/StripeBackground';
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
    <section className="bg-[#130D1B] py-16 relative">
      <StripeBackground />
      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal direction="down" delay={0.2}>
          <h2 className="text-center text-[#E2E2E2] text-xl md:text-2xl font-medium tracking-[0.2em] uppercase mb-16">
            Trusted by thousands of forex &<br />
            crypto hub worldwide
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
                isLarge={index === 4} // Make the 5th item (index 4) larger
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners; 