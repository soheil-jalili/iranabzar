import Product from "@/components/modules/product/Product";
import SeeAllButton from "@/components/modules/see-all-button/SeeAllButton";
import Image from "next/image";
import React from "react";

const LatestProductSection: React.FC = () => {
  return (
    <section className="container flex items-center gap-7.25 justify-between h-209.25 mb-16.5 relative">
      <div className="flex-1 bg-latest-products-first-container h-full rounded-34 relative overflow-visible flex items-center justify-center">
        <Image
          alt="Drill"
          src={"/assets/images/drill-aeg.png"}
          width={739}
          height={741}
          className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 max-w-none z-10"
        />
      </div>
      <div className="flex-4 bg-latest-products-first-container h-full rounded-34 pt-14.25">
        <div className="flex items-center justify-between pb-10.75 pl-14.25 pr-15.25">
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

        <div className="px-15.25">
          <h2 className="text-white text-38 font-yekan_bakh_bold mb-4">
            جدیدترین دریل های شرکت AEG
          </h2>

          <p className="text-white text-xl font-yekan_bakh_semi_bold mb-6.25 leading-45">
            شرکت AEG توسط امیل راتناو در سال 1883 ابتدا در شهر برلین در کشور
            آلمان تاسیس شد نخستین نام این شرکت ( شرکت آلمانی برق ادیسون ) بود و
            امیر راتناو در همان سال ها با خرید امتیاز ثبت ...
          </p>

          <SeeAllButton
            href="/"
            textColorClass="text-btn-text-color"
            className="z-50 absolute"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestProductSection;
