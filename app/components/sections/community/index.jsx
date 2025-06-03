'use client'
import Image from 'next/image';
import Button from '../../common/Button';
import StripeBackground from '../../common/StripeBackground';
import ScrollReveal from '@/app/components/common/ScrollReveal';

const CommunitySection = () => {
  return (
    <section className="bg-[#130D1B] relative" id="community">
      <StripeBackground />
      <div className="relative z-10">
        {/* Glass Button */}
        <ScrollReveal direction="down" delay={0.2}>
          <div className="flex justify-center mb-8 sm:mb-12 px-4">
            <Button 
              variant="glass"
              className="px-4 sm:px-8 py-2 sm:py-3 text-base sm:text-xl w-full sm:w-auto max-w-[280px] sm:max-w-none"
            >
              Key Features Of FX Utopia Community
            </Button>
          </div>
        </ScrollReveal>

        {/* Section Heading */}
        <ScrollReveal direction="up" delay={0.4}>
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-center text-white mb-8 sm:mb-16 leading-tight px-4">
            EVERYTHING A CRYPTO AND FOREX<br className="hidden sm:block" />
            TRADERS ENTHUSIAST NEEDS
          </h2>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 - Community */}
            <ScrollReveal direction="left" delay={0.6}>
              <div className="bg-gradient-to-b from-[#2e0059] to-[#12002a] rounded-3xl backdrop-blur-sm h-[400px] sm:h-[500px] flex flex-col transform transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_40px_rgba(46,0,89,0.3)] cursor-pointer">
                <div className="flex-1 flex flex-col gap-3 sm:gap-4 justify-center mb-6 sm:mb-10">
                  {/* Row 1 */}
                  <div className="w-full flex flex-wrap gap-1 sm:gap-2 justify-center">
                    <Image src="/assets/mcgkuno.png" alt="User" width={60} height={15} className="rounded-full object-fit sm:w-[80px]" priority />
                    <div className="rounded-2xl w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] flex items-center justify-center overflow-hidden">
                      <Image src="/assets/bormoley2.png" alt="User" width={32} height={32} className="object-fit sm:w-[40px] sm:h-[40px]" priority />
                    </div>
                    <Image src="/assets/bormoley3.png" alt="User" width={60} height={15} className="rounded-full object-fit sm:w-[80px]" priority />
                    <div className="rounded-2xl w-[48px] h-[48px] flex items-center justify-center overflow-hidden">
                      <Image src="/assets/girl1.png" alt="User" width={40} height={40} className="object-cover" priority />
                    </div>
                    <Image src="/assets/larvous.png" alt="User" width={60} height={15} className="rounded-full object-fit sm:w-[80px]" priority />
                  </div>
                  {/* Row 2 */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <div className="rounded-2xl w-[48px] h-[48px] flex items-center justify-center overflow-hidden">
                      <Image src="/assets/man1.png" alt="User" width={48} height={48} className="object-cover" priority />
                    </div>
                    <Image src="/assets/ready.png" alt="User" width={60} height={15} className="rounded-full object-fit sm:w-[80px]" priority />
                    <Image src="/assets/bormoley4.png" alt="User" width={30} height={30} className="rounded-full object-cover" priority />
                    <Image src="/assets/niko.png" alt="User" width={70} height={15} className="object-cover" priority />
                    <div className="rounded-2xl w-[48px] h-[48px] flex items-center justify-center overflow-hidden">
                      <Image src="/assets/mashroom.png" alt="User" width={48} height={48} className="object-cover" priority />
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Image src="/assets/romay.png" alt="User" width={60} height={20} className="rounded-full object-fit sm:w-[80px]" priority />
                    <Image src="/assets/angerman.png" alt="User" width={48} height={48} className="object-cover" priority />
                    <Image src="/assets/yarez.png" alt="User" width={60} height={20} className="rounded-full object-fit sm:w-[80px]" priority />
                    <div className="rounded-2xl w-[48px] h-[48px] flex items-center justify-center overflow-hidden">
                      <Image src="/assets/larva2.png" alt="User" width={48} height={48} className="object-cover" priority />
                    </div>
                    <Image src="/assets/nike.png" alt="User" width={60} height={20} className="object-fit sm:w-[80px]" priority />
                  </div>
                  {/* Row 4 */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Image src="/assets/cato.png" alt="User" width={30} height={30} className="rounded-full object-cover" priority />
                    <Image src="/assets/marina.png" alt="User" width={60} height={20} className="object-fit" priority />
                    <Image src="/assets/bormoley2.png" alt="User" width={30} height={30} className="rounded-full object-cover" priority />
                    <Image src="/assets/bormoley3.png" alt="User" width={60} height={20} className="object-fit" priority />
                    <Image src="/assets/girl1.png" alt="User" width={30} height={30} className="rounded-full object-cover" priority />
                  </div>
                </div>
                <div className="text-center px-2 sm:px-4 pb-6 sm:pb-10">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Large-Scale Community</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Become part of a fast-growing network of Forex and Crypto enthusiasts. Connect with passionate traders, share strategies, and grow alongside a community that's just as invested in the markets as you are.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2 - Learning & Practice */}
            <ScrollReveal direction="up" delay={0.8}>
              <div className="bg-gradient-to-b from-[#2e0059] to-[#12002a] rounded-3xl p-4 sm:p-6 backdrop-blur-sm h-[400px] sm:h-[500px] flex flex-col transform transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_40px_rgba(46,0,89,0.3)] cursor-pointer mb-12 sm:mb-20">
                <div className="flex-1 relative">
                  {/* Background cards */}
                  <div className="relative space-y-4 mt-4">
                    <div className="bg-[#2A1E43]/80 rounded-2xl p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 relative">
                            <Image src="/assets/usa.png" alt="EUR/USD" width={32} height={32} className="rounded-full" />
                          </div>
                          <div>
                            <div className="text-white/90 text-sm font-medium">EUR/USD</div>
                            <div className="text-white/60 text-xs">20:23:00</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-white text-base font-medium">149.50</span>
                          <span className="text-red-500 text-xs">-1.24%</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#2A1E43]/80 rounded-2xl p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 relative">
                            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                          </div>
                          <div>
                            <div className="text-white/90 text-sm font-medium">EUR/RUB</div>
                            <div className="text-white/60 text-xs">20:23:00</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-white text-base font-medium">145.50</span>
                          <span className="text-green-500 text-xs">+0.89%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Floating China card */}
                  <div className="absolute top-[20%] left-1/2 -translate-x-1/2 bg-white/90 rounded-[32px] py-3 px-6 w-[110%] z-10 transform hover:scale-105 transition-transform backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 relative">
                          <Image src="/assets/china.png" alt="CNY" width={32} height={32} className="rounded-full" />
                        </div>
                        <div>
                          <div className="text-gray-900 text-sm font-medium">CNY/RUB</div>
                          <div className="text-gray-600 text-xs">20:23:00</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-gray-900 text-base font-medium">249.50</span>
                        <span className="text-green-500 text-xs">+3.24%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center px-4 mb-12">
                  <h3 className="text-xl font-semibold text-white mb-2">Learning & Practice</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Sharpen your edge with real-world experience in areas like forex trading market speculation, and in-depth research. Learn by doing — and turn knowledge into results.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3 - Guides & Tutorials */}
            <ScrollReveal direction="right" delay={1.0}>
              <div className="bg-gradient-to-b from-[#2e0059] to-[#12002a] rounded-3xl p-6 backdrop-blur-sm h-[400px] flex flex-col mb-24 transform transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_40px_rgba(46,0,89,0.3)] cursor-pointer">
                <div className="flex-1 flex items-center justify-center">
                  <Image 
                    src="/assets/celestia.png" 
                    alt="Guides" 
                    width={240} 
                    height={140} 
                    className="w-full h-auto object-fit"
                    priority
                  />
                </div>
                <div className="text-center px-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Guides & Tutorials</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Skip the fluff. Access a library of exclusive how-to content, step-by-step guides, and video walkthroughs that cut straight to what matters.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4 - Stay Ahead */}
            <ScrollReveal direction="left" delay={1.2}>
              <div className="bg-gradient-to-b from-[#2e0059] to-[#12002a] rounded-3xl p-6 backdrop-blur-sm h-[500px] flex flex-col mt-8 md:mt-0 transform transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_40px_rgba(46,0,89,0.3)] cursor-pointer">
                <div className="flex-1 flex">
                  <div className="relative w-full">
                    <Image 
                      src="/assets/world.png" 
                      alt="World" 
                      width={200} 
                      height={200} 
                      className="w-full h-auto object-contain"
                      priority
                    />
                    <Image 
                      src="/assets/sarahies.png" 
                      alt="Sarah" 
                      width={50} 
                      height={50} 
                      className="absolute top-2 right-4 rounded-full"
                      priority
                    />
                    <Image 
                      src="/assets/line1.png" 
                      alt="Line" 
                      width={50} 
                      height={150} 
                      className="absolute top-10 right-2"
                    />
                    <Image 
                      src="/assets/bormoley5.png" 
                      alt="User" 
                      width={50} 
                      height={50} 
                      className="absolute bottom-4 left-4 rounded-full"
                      priority
                    />
                    <Image 
                      src="/assets/line2.png" 
                      alt="Line" 
                      width={50} 
                      height={150} 
                      className="absolute bottom-10 "
                    />
                  </div>
                </div>
                <div className="text-center px-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Stay Ahead Of Trends</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    From emerging narratives to new earning opportunities, FX Utopia keeps you in the loop. Learn what's moving the market before it hits the mainstream.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 5 - All Tools */}
            <ScrollReveal direction="up" delay={1.4}>
              <div className="bg-gradient-to-b from-[#2e0059] to-[#12002a] rounded-3xl p-6 backdrop-blur-sm h-[500px] flex flex-col transform transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_40px_rgba(46,0,89,0.3)] cursor-pointer">
                <div className="flex-1 flex items-center justify-center">
                  <Image 
                    src="/assets/logo2.png" 
                    alt="Tools" 
                    width={120} 
                    height={120} 
                    className="w-auto h-auto mb-10"
                    priority
                  />
                </div>
                <div className="text-center px-4 mb-10">
                  <h3 className="text-xl font-semibold text-white mb-2">All Tools At Your Fingertips</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    No more hopping between tabs. FX Utopia brings together the most essential tools for researching projects, tracking trends, and analyzing the crypto markets.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 6 - Advice */}
            <ScrollReveal direction="right" delay={1.6}>
              <div className="bg-gradient-to-b from-[#2e0059] to-[#12002a] rounded-3xl p-6 backdrop-blur-sm h-[600px] flex flex-col -mt-24 transform transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_40px_rgba(46,0,89,0.3)] cursor-pointer">
                <div className="flex-1 flex items-center ">
                  <Image 
                    src="/assets/expert.png" 
                    alt="Experts" 
                    width={300} 
                    height={180} 
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                <div className="text-center px-4 mb-10">
                  <h3 className="text-xl font-semibold text-white mb-2">Advice From Experienced Crypto And Forex Trading Enthusiast</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Get practical insights, honest opinions, and direct support from a community of experienced traders and enthusiasts.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection; 