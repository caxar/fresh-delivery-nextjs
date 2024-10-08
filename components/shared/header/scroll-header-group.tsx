import React from "react";
import { Container } from "../container";

import "./HeaderGroup.scss";
import { cn } from "@/lib/utils";

interface ScrollHeaderGroupProps {
  showMenu: boolean;
}

export const ScrollHeaderGroup = ({ showMenu }: ScrollHeaderGroupProps) => {
  // класс active элементу на котором hover
  const [activeMenu, setActiveMenu] = React.useState<number>(0);

  // выбор активного класса для элемента
  const handleMenuEnter = (index: number) => {
    setActiveMenu(index);
  };
  return (
    <div className={cn("heading-menu", showMenu ? "active-show" : "")}>
      <Container>
        <div className="heading-menu__categories w-[320px] overflow-auto">
          <div className="menu__1" onMouseEnter={() => handleMenuEnter(0)}>
            <div className={` ${activeMenu === 0 ? "active" : ""}`}>
              <div
                className={`menu__1-title ${activeMenu === 0 ? "active" : ""}`}
              >
                Фрукты и овощи
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
                  />
                </svg>
              </div>
            </div>
            <div
              className={`menu__1-content ${
                activeMenu === 0 ? "is-active" : ""
              }`}
            >
              <div className="menu__1-wrapper columns-3">
                <div className="menu__2">
                  <a href="" className="menu__2-title">
                    Овощи, грибы{" "}
                  </a>
                  <div className="menu__2-content">
                    <a href="" className="menu__3">
                      Помидоры
                    </a>
                    <a href="" className="menu__3">
                      Огурцы
                    </a>
                    <a href="" className="menu__3">
                      Картофель
                    </a>
                    <a href="" className="menu__3">
                      Свекла
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
