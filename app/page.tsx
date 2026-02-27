import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import HeatMeter from '@/components/heat-meter';
import IngredientsGrid from '@/components/ingredients-grid';
import ProductGallery from '@/components/product-gallery';
import BrandStory from '@/components/brand-story';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto space-y-20 px-4">
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">
              About Our Sauce
            </h2>
            <HeatMeter />
          </div>
          <IngredientsGrid />
          <ProductGallery />
          <BrandStory />
        </div>
      </section>
      <Footer />
    </>
  );
}
