/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container } from "../container";
import { Button } from "@/components/ui/button";

const Values = () => {
  return (
    <div className="mb-[60px]">
      <Container>
        <div className="px-[30px] py-[50px] rounded-xl bg-gray3 flex items-center justify-center">
          {/* левая часть */}
          <div className="flex flex-col gap-5">
            {/* ticket */}
            <div className="border-2 border-green3 py-[10px] w-[120px] rounded-xl text-center text-gray1">
              Ценности
            </div>
            {/* текст  */}
            <div className="">
              {/* Заголовок */}
              <div className="text-[35px] leading-[40px] text-balance mb-[30px] font-bold">
                Мы работаем с продуктами, которые имеют
                <span className="text-green3">
                  соответсвующие сертификаты
                </span>{" "}
                и проходят{" "}
                <span className="text-green3">контроль на каждом</span> этапе
              </div>
              {/* Подзаголовок */}
              <div className="w-[70%] text-gray1">
                У нас вы найдете всё, что нужно для здорового и вкусного
                питания, начиная с свежих фруктов и овощей и заканчивая
                молочными продуктамии готовой едой
              </div>
            </div>
            <Button className="whitespace-nowrap active:translate-y-[1px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-500 group text-primary-foreground py-2 group flex items-center justify-between text-[18px] px-4 bg-green3 rounded-2xl w-[210px] h-[58px]">
              Подробнее
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
          {/* правая часть */}
          <div className="">
            <img src="./online-groceries.png" alt="" className="w-[90%]" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Values;
