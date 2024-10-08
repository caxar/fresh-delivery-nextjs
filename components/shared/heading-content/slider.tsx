"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// swiper style
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.scss";

const Slider = () => {
  return (
    <div className="main-slider-block bg-gray3 w-full rounded-xl overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="slider-over_content">
            <div className="title">
              Доставка от Fresh <span className="font-bold">от 30 минут</span>
            </div>
            <div className="subtitle text-gray1">
              Только свежие продукты, гарантируем качество товара, елси товар
              испорчен вернем деньги!
            </div>
            <a href="" className="link">
              Подробнее{" "}
              <span>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="#179c49"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
          <img
            className="rounded-xl w-full h-full object-cover"
            src="./slider-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl w-full h-full object-cover"
            src="./slider-2.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
