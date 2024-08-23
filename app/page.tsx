"use client";
import { HeadingContent } from "@/components/shared/";
import ProductGroupList from "@/components/shared/product-group/Product-group-list";

export default function Home() {
  return (
    <div className="mt-[130px]">
      <HeadingContent />
      <ProductGroupList
        title="Фрукты и овощи"
        items={[]}
        categoryId={1}
        text={"Мы предлагаем натуральные и органические продукты"}
      />
    </div>
  );
}
