import BestSellerProducts from "@/components/templates/Index/BestSellerProducts";
import BestSellersProductSection from "@/components/templates/Index/BestSellersProductSection";
import CarouselHeader from "@/components/templates/Index/CarouselHeader";
import Features from "@/components/templates/Index/Features";
import LatestProducts from "@/components/templates/Index/LatestProducts";
import LatestProductSection from "@/components/templates/Index/LatestProductSection";

const Index: React.FC = () => {
  return (
    <main>
      <CarouselHeader />
      <LatestProducts />
      <LatestProductSection />
      <BestSellerProducts />
      <BestSellersProductSection />
      <Features />
    </main>
  );
};

export default Index;
