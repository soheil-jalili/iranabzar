import Image, { StaticImageData } from "next/image";
import React from "react";

interface Prop {
  icon: StaticImageData;
  iconAlt: string;
  href: string;
}
const SocialMediaItem: React.FC<Prop> = ({ icon, iconAlt, href }) => {
  return (
    <a href={href} className="w-10.75 h-10.75 bg-highlight-light flex items-center justify-center rounded-smooth p-2">
      <Image src={icon} alt="iconAlt" width={28.3} height={28.3} />
    </a>
  );
};

export default SocialMediaItem;
