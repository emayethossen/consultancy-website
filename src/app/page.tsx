import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import FeatureHighlights from "./components/FeatureHighlights";
import BusinessSection from "./components/BusinessSection";
import HowItWorks from "./components/HowItWorks";
import PromoBanner from "./components/PromoBanner";
import FeaturesSection from "./components/FeaturesSection";
import TeamSection from "./components/TeamSection";
import PricingSection from "./components/PricingSec";
import FAQSection from "./components/FAQSection";
import TestimonialsSection from "./components/TestimonialSec";
import { WhyUs } from "./components/WhyUs";
import { ContactForm } from "./components/Contact";
import Footer from "./components/Footer";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <div>
      {/* <div style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        // width: '100%',
      }}>
        <div className="">
        </div>
      </div> */}
      <div className="container mx-auto max-w-7xl">
        <Navigation />
        <Hero />
        <FeatureHighlights />
        <Services />
        <BusinessSection />
        <WhyUs />
        <HowItWorks />
        <PromoBanner />
        <FeaturesSection />
        <div className="bg-[#F3F6FA]">
          <TeamSection />
        </div>
        <PricingSection />
        <FAQSection />
        <TestimonialsSection />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
