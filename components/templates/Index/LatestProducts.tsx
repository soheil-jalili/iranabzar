import Product from "@/components/modules/product/Product";
import Title from "@/components/modules/title/Title";
import React from "react";

const LatestProducts: React.FC = () => {
  return (
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
  );
};

export default LatestProducts;
