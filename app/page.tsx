"use client";
import { HeadingContent } from "@/components/shared/";
import Advantage from "@/components/shared/advantage";
import Cooperation from "@/components/shared/cooperation";
import Footer from "@/components/shared/footer/footer";
import ProductGroupList from "@/components/shared/product-group/Product-group-list";
import ScrollBtn from "@/components/shared/scroll-btn";
import Values from "@/components/shared/values/values";
import React from "react";

export default function Home() {
  const [scrollingBtn, setScrollingBtn] = React.useState(false);

  const handleScrollingWindow = () => {
    const offsetTop = window.scrollY;
    offsetTop > 400 ? setScrollingBtn(true) : setScrollingBtn(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScrollingWindow);
  }, [scrollingBtn]);

  return (
    <div className="mt-[130px]">
      <HeadingContent />
      <ProductGroupList
        title="Фрукты и овощи"
        items={[]}
        categoryId={1}
        text={"Мы предлагаем натуральные и органические продукты"}
      />
      <Values />
      <ProductGroupList
        title="Молочные продукты"
        items={[]}
        categoryId={2}
        text={"Мы предлагаем натуральные и органические продукты"}
      />
      <Cooperation />
      <Advantage />
      <Footer />
      <ScrollBtn scrollingBtn={scrollingBtn} />
    </div>
  );
}
