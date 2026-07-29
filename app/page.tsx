import Product from "@/components/modules/product/Product";
import Title from "@/components/modules/title/Title";
import BestSellersSection from "@/components/templates/Index/BestSellersSection";
import CarouselHeader from "@/components/templates/Index/CarouselHeader";
import Features from "@/components/templates/Index/Features";

const Index: React.FC = () => {
  return (
    <main>
      <CarouselHeader />

      <section className="container">
        <Title title="جدیدترین محصولات" href="/" position="left" />

        <div className="flex items-center justify-between mb-15">
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

      <section className="container">
        <Title title="پرفروشترین محصولات" href="/" position="right" />
        <div className="flex items-center justify-between mb-34.25">
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

      <BestSellersSection />

      <Features />
    </main>
  );
};

export default Index;
