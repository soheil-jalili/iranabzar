import Product from "@/components/modules/product/Product";
import Image from "next/image";
import React from "react";

const AmazingDiscountSection: React.FC = () => {
  return (
    <section className="container mb-16.5">
      <div className="flex items-center justify-between mb-6.5">
        <h3 className="text-primary-color font-yekan_bakh_bold text-29">
          تخفیف شگفت انگیز
        </h3>

        <div className="flex items-center gap-1.25 justify-center">
          <button className="w-10 h-10 bg-btn-next-prev-bg rounded-xl cursor-pointer flex items-center justify-center">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.374 0.436753L18.904 7.93275C19.47 8.49675 19.47 9.49475 18.904 10.0608L11.374 17.5568C10.786 18.1408 9.836 18.1388 9.252 17.5508C8.668 16.9628 8.668 16.0148 9.256 15.4288L14.21 10.4948L1.5 10.4948C0.67 10.4948 0 9.82275 0 8.99475C0 8.16675 0.67 7.49475 1.5 7.49475L14.21 7.49475L9.256 2.56275C8.962 2.26875 8.816 1.88475 8.816 1.49875C8.816 1.11675 8.962 0.732753 9.252 0.440753C9.836 -0.145247 10.786 -0.147247 11.374 0.436753Z"
                fill="#FF5023"
              />
            </svg>
          </button>
          <button className="w-10 h-10 bg-btn-next-prev-bg rounded-xl cursor-pointer flex items-center justify-center">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.95461 0.436753L0.424612 7.93275C-0.141388 8.49675 -0.141388 9.49475 0.424612 10.0608L7.95461 17.5568C8.54261 18.1408 9.49261 18.1388 10.0766 17.5508C10.6606 16.9628 10.6606 16.0148 10.0726 15.4288L5.11861 10.4948L17.8286 10.4948C18.6586 10.4948 19.3286 9.82275 19.3286 8.99475C19.3286 8.16675 18.6586 7.49475 17.8286 7.49475L5.11861 7.49475L10.0726 2.56275C10.3666 2.26875 10.5126 1.88475 10.5126 1.49875C10.5126 1.11675 10.3666 0.732753 10.0766 0.440753C9.49261 -0.145247 8.54261 -0.147247 7.95461 0.436753Z"
                fill="#FF5023"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-between gap-5">
        <div className="flex-1 bg-black83-color rounded-35 metal__detector__section">
          <div className="mt-15.82">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <Image
            src={"/assets/images/metal-detector.png"}
            width={220}
            height={656}
            alt={"metal detector"}
            className="w-full h-full"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-6.25 flex-3 gap-6.25">
            <Product
              title="کارواش رونیکس U100E"
              description="ronix 2211 impact drill"
              price={1_580_000}
              backgroundColor="bg-red-color"
              image="/assets/images/chainsaw.png"
              textColorClassName="text-white"
              bgInsideContainerColorClassName="bg-white"
              descriptionColorClassName=" text-sub-text-color2"
              lineHorizentalBorderTopColorClassName="border-t-white"
              priceSectionColorClassname="text-white"
              buttonBackgroundColor="bg-surface-translucent"
            />
            <Product
              title="کارواش رونیکس U100E"
              description="ronix 2211 impact drill"
              price={1_580_000}
              backgroundColor="bg-red-color"
              image="/assets/images/chainsaw.png"
              textColorClassName="text-white"
              bgInsideContainerColorClassName="bg-white"
              descriptionColorClassName="text-sub-text-color2"
              lineHorizentalBorderTopColorClassName="border-t-white"
              priceSectionColorClassname="text-white"
              buttonBackgroundColor="bg-surface-translucent"
            />
            <Product
              title="کارواش رونیکس U100E"
              description="ronix 2211 impact drill"
              price={1_580_000}
              backgroundColor="bg-red-color"
              image="/assets/images/chainsaw.png"
              textColorClassName="text-white"
              bgInsideContainerColorClassName="bg-white"
              descriptionColorClassName="text-sub-text-color2"
              lineHorizentalBorderTopColorClassName="border-t-white"
              priceSectionColorClassname="text-white"
              buttonBackgroundColor="bg-surface-translucent"
            />
          </div>

          <div className="bg-blue-color h-60 rounded-20 pt-13.25 pr-22.25">
            <h3 className="font-yekan_bakh_bold text-white text-28-65 mb4.25">
              انواع دریل های شارژی
            </h3>

            <button className="cursor-pointer w-6.5 h-6 border-3 bg-white flex items-center justify-center">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.16696 0.163608C6.36527 0.361921 6.3833 0.672249 6.22104 0.890928L6.16696 0.953579L1.34866 5.77214L6.16696 10.5907C6.36527 10.789 6.3833 11.0993 6.22104 11.318L6.16696 11.3807C5.96865 11.579 5.65832 11.597 5.43964 11.4347L5.37699 11.3807L0.163446 6.16712C-0.0348668 5.96881 -0.0528955 5.65848 0.109361 5.4398L0.163446 5.37715L5.37699 0.163608C5.59513 -0.0545361 5.94881 -0.0545361 6.16696 0.163608Z"
                  fill="#5068E4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmazingDiscountSection;
