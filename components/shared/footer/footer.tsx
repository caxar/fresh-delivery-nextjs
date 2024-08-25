import React from "react";
import { Container } from "../container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-[20px]">
      <Container>
        {/* wrapper */}
        <div className="flex justify-between relative py-[80px] px-[50px] bg-gray3 rounded-xl h-[350px]">
          {/* левая часть */}
          <div className="flex items justify-center gap-[100px] ">
            <div className="">
              <div className="mb-[30px] text-[25px] font-bold text-green3">
                FRESH
              </div>
              <Button className="group whitespace-nowrap active:translate-y-[1px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-500 group text-primary-foreground py-2 group flex items-center justify-between text-[18px] px-4 bg-green3 rounded-2xl w-[210px] h-[58px]">
                Написать нам
                <div className="flex items-center justify-center h-[40px] w-[40px] bg-green2 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-move-up-right group-hover:rotate-45 transition ease-in delay-100"
                  >
                    <path d="M13 5H19V11"></path>
                    <path d="M19 5L5 19"></path>
                  </svg>
                </div>
              </Button>
            </div>
            {/* навигация по сайту */}
            <div className="flex gap-[40px]">
              <ul>
                <li className="mb-[20px]">
                  <Link className="text-gray1 hover:text-green3" href="">
                    О бренде
                  </Link>
                </li>
                <li className="mb-[20px]">
                  <Link className="text-gray1 hover:text-green3" href="">
                    Контакты
                  </Link>
                </li>
                <li className="mb-[20px]">
                  <Link className="text-gray1 hover:text-green3" href="">
                    Гарантия
                  </Link>
                </li>
                <li className="mb-[20px]">
                  <Link className="text-gray1 hover:text-green3" href="">
                    СОтрудничество
                  </Link>
                </li>
              </ul>
              {/* след навигация */}
              <ul>
                <li className="mb-[20px]">
                  <Link className="text-gray1 hover:text-green3" href="">
                    FAQ
                  </Link>
                </li>
                <li className="mb-[20px]">
                  <Link className="text-gray1 hover:text-green3" href="">
                    АКции
                  </Link>
                </li>
                <li className="mb-[20px]">
                  <Link className="text-gray1 hover:text-green3" href="">
                    РЕцепты
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* правая часть */}
          <div className="w-[60%]">
            <img
              className="w-[50%] right-0 bottom-[-70px] absolute scale-[-1, 1]"
              src="/footer-bg.png"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
