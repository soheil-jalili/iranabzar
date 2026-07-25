import React from "react";
import FooterCopyright from "./FooterCopyright";
import SocialMediaItem from "./SocialMediaItem";
import FooterItem, { ItemType } from "./FooterItem";
import Image from "next/image";

import zarinpal from "@/public/assets/images/zarinpal.png";
import enamad from "@/public/assets/images/enamad.png";
import telegram from "@/public/assets/images/telegram.png";
import aparat from "@/public/assets/images/aparat.png";
import instagram from "@/public/assets/images/instagram.png";
import twitter from "@/public/assets/images/twitter.png";
import whatsapp from "@/public/assets/images/whatsapp.png";

const footerItems: ItemType[] = [
  {
    id: 1,
    title: "پاسخ به پرسش های متداول",
  },
  {
    id: 2,
    title: "روش های ارسال کالا",
  },
  {
    id: 3,
    title: "روش های پرداخت",
  },
  {
    id: 4,
    title: "قوانین و مقررات",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pb-9">
      <div className="container">
        <div className="flex space-x-38.75 pb-19 pt-15.25">
          <FooterItem title="راهنمای مشتریان" items={footerItems} />
          <FooterItem title="راهنمای مشتریان" items={footerItems} />

          <div className="flex flex-col gap-8.75 mr-auto">
            <div className="flex gap-7.5 items-center justify-end">
              <Image alt="enamad" src={zarinpal} width={106} height={143} />
              <Image alt="enamad" src={enamad} width={125} height={136} />
            </div>

            <div className="flex gap-7.75">
              <SocialMediaItem icon={aparat} iconAlt="aparat" href="/" />
              <SocialMediaItem icon={telegram} iconAlt="telegram" href="/" />
              <SocialMediaItem icon={instagram} iconAlt="instagram" href="/" />
              <SocialMediaItem icon={whatsapp} iconAlt="whatsapp" href="/" />
              <SocialMediaItem icon={twitter} iconAlt="twitter" href="/" />
            </div>
          </div>
        </div>
      </div>

      <FooterCopyright />
    </footer>
  );
};

export default Footer;
