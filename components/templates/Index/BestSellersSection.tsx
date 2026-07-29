import Product from "@/components/modules/product/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BestSellersSection: React.FC = () => {
  return (
    <section className="container bg-best-seller-container-color rounded-34 mb-26">
      <div className="relative px-14.25 pb-14.25">
        <div>
          <h2 className="font-yekan_bakh_bold text-38 text-white pt-10.75 pb-9.75">
            پرفروشترین اره برقی ها
          </h2>
          <Link
            href={""}
            className="inline-block py-1.5 px-5 border-3 border-border-see-all-color mb-14.25 text-xl text-primary-color bg-white-94-color rounded-6 font-yekan_bakh_bold"
          >
            مشاهده همه محصولات
          </Link>
        </div>

        <Image
          src={"/assets/images/chainsaw-best-seller.png"}
          alt="chainsaw"
          width={687}
          height={456}
          className="absolute left-0 -top-32"
        />
      </div>

      <div className="flex items-center justify-between pb-15.5 px-14.25">
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

export default BestSellersSection;
