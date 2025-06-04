'use client'
import Link from 'next/link'
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaArrowUp } from 'react-icons/fa'
import Button from '@/app/components/common/Button'
import ScrollReveal from '@/app/components/common/ScrollReveal'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

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
    }
  };

  const scrollToTop = () => {
    const duration = 1000;
    const start = window.pageYOffset;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Easing function for smooth deceleration
      const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
      
      window.scrollTo({
        top: start * (1 - easeOutCubic(progress)),
        behavior: 'auto'
      });

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <footer className="relative w-full bg-gradient-main">
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      <div className="relative z-10 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Left Section */}
            <ScrollReveal direction="left" delay={0.2}>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  NEVER MISS A<br />MARKET MOVE AGAIN
                </h2>
                <p className="text-gray-300 text-sm mb-6">
                  Get trading insights, market updates, strategy tips, and exclusive resources — delivered straight to your inbox.
                </p>
              </div>
            </ScrollReveal>

            {/* Right Section - Newsletter */}
            <ScrollReveal direction="right" delay={0.4}>
              <div className="flex flex-col">
                <h3 className="text-white text-xl mb-4">Sign Up Newsletter</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-3 px-6 text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50"
                    />
                  </div>
                  <Button variant="purple" className="whitespace-nowrap px-8">
                    Subscribe
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Quick Links and Social */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
            {/* Back to Top */}
            <ScrollReveal direction="left" delay={0.2}>
              <button
                onClick={scrollToTop}
                className={`flex items-center gap-2 bg-purple-500/20 backdrop-blur-md rounded-full py-2 px-4 text-white transition-all duration-300 hover:bg-purple-500/30 ${
                  isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <span>Back To Top</span>
              </button>
            </ScrollReveal>

            {/* Quick Links */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-col items-center my-6 md:my-0">
                <h3 className="text-white text-xl font-semibold mb-4">QUICK LINKS</h3>
                <nav className="flex gap-8">
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('community')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Community & Forum
                  </button>
                  <button 
                    onClick={() => scrollToSection('why')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Educational Content
                  </button>
                  <button 
                    onClick={() => scrollToSection('footer')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Contact Us
                  </button>
                </nav>
              </div>
            </ScrollReveal>

            {/* Social Icons */}
            <ScrollReveal direction="right" delay={0.6}>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaFacebookF className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaYoutube className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedinIn className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 