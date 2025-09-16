import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsHero from "@/components/NewsHero";
import NewsSection from "@/components/NewsSection";

const Noticias = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <NewsHero />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Noticias;