import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import NewsSection from "@/components/NewsSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import DonationSection from "@/components/DonationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProject />
        <ServicesSection />
        <NewsSection />
        <DonationSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
