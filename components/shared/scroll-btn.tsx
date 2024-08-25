import { cn } from "@/lib/utils";
import React from "react";

interface ScrollBtnProps {
  scrollingBtn: boolean;
}

const ScrollBtn = ({ scrollingBtn }: ScrollBtnProps) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={cn(
        "flex items-center justify-center w-[55px] h-[52px] fixed right-[20px] bottom-[50px] bg-green3 rounded-xl cursor-pointer z-20 transition delay-59 ease-linear opacity-0 hover:shadow-scrollBtnShadow",
        scrollingBtn ? "opacity-100" : ""
      )}
      onClick={handleClick}
    >
      <svg
        width="38px"
        height="38px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6V18M12 6L7 11M12 6L17 11"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ScrollBtn;
