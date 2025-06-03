'use client'
import Image from 'next/image'
import StripeBackground from '@/app/components/common/StripeBackground'
import ScrollReveal from '@/app/components/common/ScrollReveal'

const Marketplace = () => {
  const marketplaceItems = [
    {
      title: "Signal Groups & Copy Trading Services",
      colorful: true
    },
    {
      title: "1-On-1 Coaching & Mentorship Programs",
      colorful: false
    },
    {
      title: "Trading Bots & Algorithmic Tools",
      colorful: false
    },
    {
      title: "Special Deals On Courses & Tools",
      colorful: false
    },
    {
      title: "Community-Rated Reviews & Rankings",
      colorful: false
    }
  ]

  const signalStats = [
    {
      title: "Today's Signals Shared",
      value: "12",
      isFirst: true,
      textSize: "text-lg"
    },
    {
      title: "Top",
      subtitle: "Performing Trader",
      value: "+8.5%",
      textSize: "text-lg"
    },
    {
      title: "Market Snapshot",
      value: "BTC, ETH, EUR/USD",
      textSize: "text-xs tracking-tight whitespace-nowrap"
    },
    {
      title: "Next Signal Drop in",
      value: "11:06:11",
      textSize: "text-lg"
    }
  ]

  return (
    <section className="relative bg-[#130D1B] py-20">
      <StripeBackground/>
      <div className="relative z-10 container mx-auto px-5 max-w-7xl">
        <ScrollReveal direction="down" delay={0.2}>
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            EXCLUSIVE MARKETPLACE FOR TRADERS
          </h2>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex justify-between gap-5 mb-12 flex-wrap">
            {marketplaceItems.map((item, index) => (
              <div key={index} className="flex-1 text-center min-w-[200px] mb-4">
                <h3 className="text-white text-base font-medium mb-4">
                  {item.title}
                </h3>
                
                <div className={`h-0.5 mx-auto ${
                  item.colorful 
                  ? 'bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1]' 
                  : 'bg-white/10'
                }`}></div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.6}>
          <div className="w-full max-w-[900px] h-auto min-h-[500px] mx-auto bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl rounded-2xl p-4 md:p-8 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
              <div className="flex items-center gap-5 w-full">
                <div className="bg-gradient-to-br from-[#A84BC2] to-[#6C3ECB] p-2 rounded-full">
                  <Image 
                    src="/assets/logo2.png" 
                    alt="Logo" 
                    width={40} 
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between w-full mb-4">
                    <h3 className="text-xl text-white font-medium">Overview</h3>
                    <div className="flex gap-1.5 ml-auto">
                      <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                      <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                      <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-full h-[2px] bg-white/10"></div>
                    <div className="w-1/2 h-[2px] bg-white/10"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex md:flex-col gap-4 w-full md:w-[180px] overflow-x-auto md:overflow-x-visible">
                <button className="px-5 py-3 bg-gradient-to-r from-[#A84BC2]/30 to-[#6C3ECB]/30 rounded-[20px] text-white transition-all hover:from-[#A84BC2]/40 hover:to-[#6C3ECB]/40 backdrop-blur-sm border border-white/10 shadow-[0_4px_12px_0_rgba(31,38,135,0.37)] whitespace-nowrap">
                  Signal Sharing
                </button>
                <button className="px-5 py-3 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-[20px] h-[45px] min-w-[45px] border border-white/10 shadow-[0_4px_12px_0_rgba(31,38,135,0.37)] hover:from-white/[0.12] hover:to-white/[0.04] transition-all"></button>
                <button className="px-5 py-3 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-[20px] h-[45px] min-w-[45px] border border-white/10 shadow-[0_4px_12px_0_rgba(31,38,135,0.37)] hover:from-white/[0.12] hover:to-white/[0.04] transition-all"></button>
                <button className="px-5 py-3 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-[20px] h-[45px] min-w-[45px] border border-white/10 shadow-[0_4px_12px_0_rgba(31,38,135,0.37)] hover:from-white/[0.12] hover:to-white/[0.04] transition-all"></button>
              </div>

              <div className="flex-1">
                <h4 className="text-lg text-white mb-5">Signal Feed</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                  {signalStats.map((stat, index) => (
                    <div 
                      key={index} 
                      className={`${
                        stat.isFirst 
                          ? 'bg-gradient-to-br from-[#A84BC2]/20 to-[#6C3ECB]/20 hover:from-[#A84BC2]/30 hover:to-[#6C3ECB]/30' 
                          : 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04]'
                      } p-5 rounded-xl h-[170px] relative backdrop-blur-xl border border-white/10 shadow-[0_4px_12px_0_rgba(31,38,135,0.37)] transition-all cursor-pointer`}
                    >
                      <div className="w-8 h-8 bg-white/10 rounded-full absolute top-5 left-5 backdrop-blur-sm border border-white/5"></div>
                      <div className="mt-12">
                        <div className="text-white/70 text-sm mb-2">
                          <p>{stat.title}</p>
                          {stat.subtitle && <p>{stat.subtitle}</p>}
                        </div>
                        <p className={`text-white ${stat.textSize} font-medium`}>{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] backdrop-blur-xl rounded-xl p-5 mt-5 h-[130px] overflow-hidden border border-white/10 shadow-[0_4px_12px_0_rgba(31,38,135,0.37)] transition-all cursor-pointer">
                  <div className="w-full h-full relative">
                    <Image 
                      src="/assets/indicator.png" 
                      alt="Trading Chart" 
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Marketplace 