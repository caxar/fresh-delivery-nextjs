import React from "react";
import { Container } from "../container";
import { Title } from "../title";
import { Button } from "@/components/ui/button";
import ProductGroupItem from "./product-group-item";
import { cn } from "@/lib/utils";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Group.scss";

// import required modules
import { Navigation } from "swiper/modules";

interface ProductGroupListProps {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
  text: string;
}

const ProductGroupList = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
  text,
}: ProductGroupListProps) => {
  return (
    <div className={cn("mb-[60px]", className)} id={title}>
      <Container>
        <div className="flex items-center justify-between mb-20">
          {/* Заголовок */}
          <Title text={title} size="2xl" className="">
            {title}
          </Title>
          {/* текст */}
          <div className="text-gray1 w-[260px]">{text}</div>
          {/* кнопка */}
          <Button className="bg-green3 w-[240px]">
            Перейти в раздел
            <div className="flex items-center justify-center h-[40px] w-[40px] bg-green2 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-move-up-right group-hover:rotate-45 transition ease-in delay-100"
              >
                <path d="M13 5H19V11"></path>
                <path d="M19 5L5 19"></path>
              </svg>
            </div>
          </Button>
        </div>
        {/* Карточки товара лайдер*/}
        <div className="group-list-slider">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={4}
            spaceBetween={30}
            grabCursor={true}
            className=""
            breakpoints={{
              320: {
                slidesPerView: 1,
                // spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                // spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                // spaceBetween: 40,
              },
              1028: {
                slidesPerView: 3,
                // spaceBetween: 30,
              },
              1250: {
                slidesPerView: 4,
                // spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              {" "}
              <ProductGroupItem />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <ProductGroupItem />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <ProductGroupItem />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <ProductGroupItem />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <ProductGroupItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default ProductGroupList;
