import Navbar from './components/navbar/Navbar'
import Hero from './components/sections/hero/Hero'
import TrustedPartners from './components/sections/TrustedPartners/TrustedPartners'
import CommunitySection from './components/sections/community'
import WhySection from './components/sections/why'
import Marketplace from './components/sections/marketplace/Marketplace'
import Testimonials from './components/sections/testimonials/Testimonials'
import BlogSection from './components/sections/blog-section/BlogSection'
import FAQ from './components/sections/faq/FAQ'
import CallToAction from './components/sections/cta/CallToAction'
import Footer from './components/sections/footer/Footer'
const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedPartners />
      <CommunitySection />
      <WhySection />
      <Marketplace />
       <Testimonials/>
       <BlogSection/>
       <FAQ/>
       <CallToAction/>
       <Footer/>
      {/* rest of your page */}
    </main>
  )
}

export default page
