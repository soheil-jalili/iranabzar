import Link from "next/link";
import React from "react";

interface Prop {
  href: string;
  textColorClass?: string;
  className?: string;
}

const SeeAllButton: React.FC<Prop> = ({
  href,
  textColorClass = "text-primary-color",
  className
}) => {
  return (
    <Link
      href={href}
      className={`inline-block py-1.5 px-5 border-3 border-border-see-all-color  text-xl ${textColorClass} bg-white-94-color rounded-6 font-yekan_bakh_bold cursor-pointer ${className}`}
    >
      مشاهده همه محصولات
    </Link>
  );
};

export default SeeAllButton;
