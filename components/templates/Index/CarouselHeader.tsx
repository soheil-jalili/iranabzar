"use client";
import Image from "next/image";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

const CarouselHeader: React.FC = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide>
        <div className="flex py-8 justify-center">
          <Image
            src={"/assets/images/abzar1.png"}
            width={645}
            height={408}
            alt="Abzar"
            className="z-1"
          />
          <div className="h-[378px] z-0 -mr-5 mt-5 bg-gray-color flex items-center justify-center rounded-l-2xl pl-4">
            <div className="w-[607px] h-[349px] flex items-center flex-col justify-center bg-primary-text-color  text-white rounded-l-2xl">
              <div className="w-[417px] text-center">
                <h1 className="font-yekan_bakh_extra_bold font-extrabold text-[44.44px]">
                  دریل های شارژی ASED
                </h1>
                <p className="text-[39.4px]">با فناوری موتور براش لس</p>

                <Link
                  href={"/"}
                  className="bg-white w-[35px] h-[32.31px] mr-auto flex items-center justify-center border-4 rounded-lg cursor-pointer mt-5 border-box"
                >
                  <IoIosArrowBack className="text-primary-text-color" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex py-8 justify-center">
          <Image
            src={"/assets/images/abzar1.png"}
            width={645}
            height={408}
            alt="Abzar"
            className="z-1"
          />
          <div className="h-[378px] z-0 -mr-5 mt-5 bg-gray-color flex items-center justify-center rounded-l-2xl pl-4">
            <div className="w-[607px] h-[349px] flex items-center flex-col justify-center bg-primary-text-color  text-white rounded-l-2xl">
              <div className="w-[417px] text-center">
                <h1 className="font-yekan_bakh_extra_bold font-extrabold text-[44.44px]">
                  دریل های شارژی ASED
                </h1>
                <p className="text-[39.4px]">با فناوری موتور براش لس</p>

                <div className="bg-white w-[35px] h-[32.31px] mr-auto flex items-center justify-center border-4 rounded-lg cursor-pointer mt-5 border-box">
                  <IoIosArrowBack className="text-primary-text-color" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex py-8 justify-center">
          <Image
            src={"/assets/images/abzar1.png"}
            width={645}
            height={408}
            alt="Abzar"
            className="z-1"
          />
          <div className="h-[378px] z-0 -mr-5 mt-5 bg-gray-color flex items-center justify-center rounded-l-2xl pl-4">
            <div className="w-[607px] h-[349px] flex items-center flex-col justify-center bg-primary-text-color  text-white rounded-l-2xl">
              <div className="w-[417px] text-center">
                <h1 className="font-yekan_bakh_extra_bold font-extrabold text-[44.44px]">
                  دریل های شارژی SED
                </h1>
                <p className="text-[39.4px]">با فناوری موتور براش لس</p>

                <div className="bg-white w-[35px] h-[32.31px] mr-auto flex items-center justify-center border-4 rounded-lg cursor-pointer mt-5 border-box">
                  <IoIosArrowBack className="text-primary-text-color" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselHeader;
