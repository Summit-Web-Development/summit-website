import HeroSection from "../components/HeroSection";
import WhyUsSection from "../components/WhyUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ServicesSection from "../components/ServicesSection";
import CTABanner from "../components/CTABanner";

export const metadata = {
  title: "Summit Webcraft | High-Performance Websites for Service Businesses",
  description:
    "Summit Webcraft builds blazing-fast, lead-generating websites for service businesses across North America. Custom web design, SEO, ads, and AI receptionist services.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection />
      <WhyUsSection />
      <ServicesSection />
      <CTABanner />
    </>
  );
}