import React from "react";
import { Container } from "./container";
import { nanoid } from "nanoid";

const Advantage = () => {
  const data = [
    {
      title: "Вернем деньги",
      subtitle: "Вернём деньги, если не устроило качество",
      iamgeUrl: "/advantage-back.svg",
    },
    {
      title: "Честный продукт",
      subtitle: "Ежедневные проверки продукции",
      iamgeUrl: "/advantage-quality.svg",
    },
    {
      title: "Производители",
      subtitle: "87% товаров произведены в России",
      iamgeUrl: "/advantage-factory.svg",
    },
  ];

  return (
    <div className="mb-[60px]">
      <Container>
        <div className="flex items-center justify-between gap-5">
          {data.map((item) => (
            <div
              className="flex items-center gap-3 h-[180px] rounded-xl bg-gray3 px-5"
              key={nanoid()}
            >
              {/* Картинка */}
              <div className="">
                <img src={item.iamgeUrl} alt="" />
              </div>
              {/* Текст */}
              <div className="">
                {/* Тайтл */}
                <div className="font-bold text-[18px] mb-1">{item.title}</div>
                {/* Субтатйтл */}
                <div className="">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Advantage;
