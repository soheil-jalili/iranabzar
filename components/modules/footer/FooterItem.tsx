import Link from "next/link";
import React from "react";

export type ItemType = {
  id: number;
  title: string;
};

interface Prop {
  title: string;
  items: ItemType[];
}

const FooterItem: React.FC<Prop> = ({ title, items }) => {
  return (
    <div>
      <h3 className="mb-17 font-yekan_bakh_semi_bold text-25">{title}</h3>

      <div className="flex flex-col gap-4.5">
        {items.map((item: ItemType) => {
          return (
            <Link
              href={"/"}
              className="text-4.5 text-medium-gray"
              key={item.id}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterItem;
