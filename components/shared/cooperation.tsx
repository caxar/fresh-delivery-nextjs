import React from "react";
import { Container } from "./container";
import { nanoid } from "nanoid";
import { Title } from "./title";

const Cooperation = () => {
  const cloudWord = [
    {
      title: "Полезная еда",
      bg: "#e1b89d",
    },
    {
      title: "ЯдринМолоко",
      bg: "#3abd97",
    },
    {
      title: "Свежесть каждый день",
      bg: "#59a9fd",
    },
    {
      title: "ОдинДень",
      bg: "#fbb555",
    },
    {
      title: "ОвощнойТорг",
      bg: "#bab2fd",
    },
  ];

  return (
    <div className="mb-[80px]">
      <Container>
        {/*  обёртка */}
        <div
          className="relative bg-gray3 h-[550px] flex items-center justify-center
        flex-col overflow-hidden rounded-xl"
        >
          {/* Заголовок */}
          <Title className="w-[75%] text-center text-[36px] font-bold mb-[60px] leading-[40px]">
            <span className="text-green3">FRESH</span> - объединяет{" "}
            <span>местных производителей,</span> у которых есть страсть к свежим
            и <span className="text-green3">качественным продуктам</span> с
            миссией <span className="text-green3">заботы о мире</span> и вашем
            здоровье
          </Title>
          {/* Года работы */}
          <div className="text-[45px] font-bold mb-[60px]">
            2018 - <span className="text-green3">2024</span>
          </div>
          {/* Облако слов */}
          <ul className="flex items-center gap-[10px]">
            {cloudWord.map((item) => (
              <li
                className="py-[10px] px-[15px] text-white rounded-xl"
                key={nanoid()}
                style={{ background: item.bg }}
              >
                {item.title}
              </li>
            ))}
          </ul>

          {/* Картинки боковые */}
          <img
            className="absolute left-[-30px] bottom-0"
            src="/cooperation-left.png"
            alt=""
          />
          <img
            className="absolute right-[-30px] bottom-[20px]"
            src="/cooperation-right.png"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default Cooperation;
