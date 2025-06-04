'use client'
import Button from '@/app/components/common/Button'
import ScrollReveal from '@/app/components/common/ScrollReveal'

const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2f] to-[#2a1f47] py-20">
      <div className="relative z-10 container mx-auto px-5 max-w-7xl">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-gradient-to-br from-purple-500/20 via-indigo-600/15 to-pink-500/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_8px_32px_0_rgba(167,139,250,0.3)]">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal direction="down" delay={0.4}>
                <h2 className="text-5xl font-bold text-white mb-4 uppercase tracking-wide">
                  READY TO UNLOCK YOUR <br />TRADING POTENTIAL?
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.6}>
                <p className="text-white/70 text-lg mb-12">
                  Join thousands of Forex and Crypto traders leveling up their skills, tools, and strategies — all in one place! No hidden platform fees.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <Button 
                    variant="dark"
                    size="lg"
                    href="#join"
                    className="min-w-[240px] text-base font-normal"
                  >
                    Join FX Utopia
                  </Button>
                  <Button 
                    variant="purple"
                    size="lg"
                    href="#create"
                    className="min-w-[240px] text-base font-normal"
                  >
                    Create Your Account
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CallToAction 