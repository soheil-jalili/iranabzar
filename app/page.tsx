import Product from "@/components/modules/product/Product";
import CarouselHeader from "@/components/templates/Index/CarouselHeader";
import Features from "@/components/templates/Index/Features";

const Index: React.FC = () => {
  return (
    <main>
      <CarouselHeader />

      <section className="container">
        <div className="flex items-center gap-[52px] mb-34.25">
          <Product
            title="کارواش رونیکس U100E"
            description="ronix 2211 impact drill"
            price={1_580_000}
            backgroundColor="bg-product-detail-container2-color"
            image="/assets/images/chainsaw.png"
          />
          <Product
            title="کارواش رونیکس U100E"
            description="ronix 2211 impact drill"
            price={1_580_000}
            backgroundColor="bg-product-detail-container2-color"
            image="/assets/images/chainsaw.png"
          />
          <Product
            title="کارواش رونیکس U100E"
            description="ronix 2211 impact drill"
            price={1_580_000}
            backgroundColor="bg-product-detail-container2-color"
            image="/assets/images/chainsaw.png"
          />
          <Product
            title="کارواش رونیکس U100E"
            description="ronix 2211 impact drill"
            price={1_580_000}
            backgroundColor="bg-product-detail-container2-color"
            image="/assets/images/chainsaw.png"
          />
        </div>
      </section>

      <Features />
    </main>
  );
};

export default Index;
