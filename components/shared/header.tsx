"use client";
import React from "react";
import { Container } from "./container";
import { MapPinCheckInside } from "lucide-react";
import Link from "next/link";
import { nanoid } from "nanoid";
import { ScrollHeader } from "./scroll-header";

const data = [
  {
    value: "О бренде",
    link: "/about",
  },
  {
    value: "Контакты",
    link: "/contacts",
  },
  {
    value: "FAQ",
    link: "/faq",
  },
  {
    value: "Гарантия",
    link: "/garanty",
  },
  {
    value: "Сотрудничество",
    link: "/communication",
  },
];

export const Header = () => {
  return (
    <div className="mb-30">
      <Container>
        <div className="flex items-center justify-between py-4 mb-30">
          {/* левая часть */}
          <div className="flex gap-1 items-center cursor-pointer">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_429_11016)">
                <path
                  d="M5.25201 9.97523L16.9111 4.42326C18.6115 3.61355 20.3864 5.38846 19.5767 7.08885L14.0248 18.748C13.2661 20.3413 10.966 20.2427 10.3464 18.5904L9.3192 15.8512C9.11639 15.3104 8.68964 14.8836 8.14879 14.6808L5.40963 13.6536C3.75729 13.034 3.65873 10.7339 5.25201 9.97523Z"
                  stroke="#1e8725"
                  fill="#1e8725"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_429_11016">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <span className="text-gray1 text-[18px] font-[500]">Москва</span>
          </div>

          {/* правая часть */}
          <div className="flex items-center gap-8">
            {data.map((item) => (
              <Link
                className="text-gray1 hover:text-green3"
                key={nanoid()}
                href={item.link}
              >
                {item.value}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <ScrollHeader />
    </div>
  );
};
