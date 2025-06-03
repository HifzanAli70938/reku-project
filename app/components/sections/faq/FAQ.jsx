'use client'
import { useState } from 'react'
import Image from 'next/image'
import { FaChevronDown } from 'react-icons/fa'
import StripeBackground from '@/app/components/common/StripeBackground'
import ScrollReveal from '@/app/components/common/ScrollReveal'

const faqData = [
  {
    question: "Is FX Utopia free to join?",
    answer: "Yes, basic features like basic educational content, the blog, and user-friendly access are 100% free. Some premium tools and membership tiers may require payment."
  },
  {
    question: "Do I need trading experience to use FX Utopia?",
    answer: "No, FX Utopia is designed for both beginners and experienced traders. We provide comprehensive educational resources to help you start from any level."
  },
  {
    question: "Can I access FX and Crypto education in one place?",
    answer: "Yes, our platform offers integrated education for both forex and cryptocurrency trading, providing a comprehensive learning experience."
  },
  {
    question: "How do I buy something from the marketplace?",
    answer: "Simply browse our marketplace, select your desired item, and follow the secure checkout process. We accept various payment methods for your convenience."
  },
  {
    question: "Is the mentorship program included in the free plan?",
    answer: "The basic mentorship features are available in the free plan, but advanced mentorship and one-on-one sessions are part of our premium packages."
  },
  {
    question: "How do I join the community?",
    answer: "You can join our community by creating a free account on our platform. This will give you access to our basic features and community forums."
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="relative bg-[#130D1B] py-12 sm:py-16" id="faq">
      <StripeBackground />
      <div className="relative z-10 container mx-auto px-4 sm:px-5 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Section */}
          <div className="flex flex-col items-start">
            <ScrollReveal direction="left" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
                FREQUENTLY ASKED <br />QUESTIONS
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.4}>
              <p className="text-white/70 mb-8 sm:mb-12 text-base sm:text-lg">
                We're here to make your journey smooth. Below are some quick answers to the most common questions about FX Utopia
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.6}>
              <div className="w-full flex justify-center">
                <Image
                  src="/assets/logo2d.png"
                  alt="FX Utopia Logo"
                  width={300}
                  height={300}
                  className="max-w-[200px] sm:max-w-[300px] h-auto"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Section - FAQ Accordion */}
          <ScrollReveal direction="right" delay={0.4}>
            <div className="space-y-3 sm:space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className={`w-full p-3 sm:p-4 flex justify-between items-center rounded-xl sm:rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-gradient-to-r from-[#A84BC2]/80 to-[#6C3ECB]/80 text-white shadow-[0_8px_32px_0_rgba(168,75,194,0.37)]'
                        : 'bg-white/[0.08] text-white hover:bg-white/[0.12] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]'
                    }`}
                  >
                    <span className="text-left text-sm sm:text-base font-medium pr-4">{faq.question}</span>
                    <FaChevronDown
                      className={`transform transition-transform duration-300 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      activeIndex === index
                        ? 'max-h-48 opacity-100 p-3 sm:p-4 bg-white/[0.08] backdrop-blur-xl rounded-xl sm:rounded-2xl mt-2 border border-white/10'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-white/70 text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default FAQ 