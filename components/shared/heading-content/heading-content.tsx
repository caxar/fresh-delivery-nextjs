import React from "react";
import { Container } from "../container";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import { Title } from "../title";

export const HeadingContent = () => {
  return (
    <div className="">
      <Container>
        <div className="grid grid-cols-2 gap-5 h-[500px]">
          {/* левая часть */}
          <div className="flex flex-col items-start justify-center bg-gray2 rounded-xl px-7 gap-10">
            <Title className="text-[45px] font-bold leading-10">
              <span className="text-green3">Свежие</span> продукты от местных
              фермеров
            </Title>

            <p className="text-gray1">
              Сотрудничаем с производителями вашего региона, доставляем
              натуральные и свежие продукты
            </p>

            <Button className="group flex items-center justify-between text-[18px] pl-5 pr-1 bg-green3 rounded-2xl w-[210px] h-[58px] ">
              Каталог
              <div className="flex items-center justify-center h-[40px] w-[40px] bg-green2 rounded-xl">
                <MoveUpRight
                  size={19}
                  className="group-hover:rotate-45 transition ease-in delay-100"
                />
              </div>
            </Button>
          </div>
          {/* правая часть */}
          <div className="bg-green2 rounded-2xl"></div>
        </div>
      </Container>
    </div>
  );
};
