import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsHero from "@/components/NewsHero";
import ArticleContent from "@/components/ArticleContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <NewsHero />
        <ArticleContent />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
