import React from "react";
import { Container } from "./container";
import { SearchHeader } from "./search-header";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { nanoid } from "nanoid";

const data = [
  {
    value: "Акции",
    link: "/acii",
  },
  {
    value: "Рецепты",
    link: "/recipe",
  },
];

export const ScrollHeader = () => {
  return (
    <Container>
      <div className="flex items-center justify-between mt-3 bg-gray3 rounded-xl py-4 px-8">
        {/* левая часть */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-5">
            {/* логотип */}
            <Link href="/" className="text-[28px] font-bold text-green3">
              FRESH
            </Link>
            {/* кнопка каталог */}
            <button className="flex items-center gap-2 bg-green3 text-[#fff] text-[20px] py-3 px-6 rounded-xl">
              <AlignJustify size={32} />
              Каталог
            </button>
          </div>
          {/* Поиск */}
          <div className="flex items-center gap-8">
            <SearchHeader />
            <div className="flex items-center gap-8">
              {data.map((item) => (
                <Link
                  key={nanoid()}
                  href={item.link}
                  className="text-gray1 hover:text-green3"
                >
                  {item.value}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* правая часть */}
        <div className=""></div>
      </div>
    </Container>
  );
};
