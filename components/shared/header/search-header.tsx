"use client";

import React, { useRef } from "react";
import { Search, X } from "lucide-react";
import { useDebounce } from "react-use";
import { cn } from "@/lib/utils";

export const SearchHeader = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [focused, setFocused] = React.useState<boolean>(false);
  const ref = useRef(null);

  const handleChangeFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    ref.current.focus(setFocused(true));
  };
  const handleClickAway = () => {
    setFocused(false);
  };

  const clearInput = () => {
    setSearchValue("");
  };

  useDebounce(
    () => {
      handleChangeFunction;
    },
    350,
    [searchValue]
  );

  return (
    <div
      onMouseEnter={handleClick}
      onMouseLeave={handleClickAway}
      className={cn(
        "bg-[white] border-2 border-gray2 flex items-center py-4 pl-[25px] pr-[15px]  gap-[10px] rounded-[10px] w-[300px] transition ease-in-out delay-150",
        focused ? "border-green3" : ""
      )}
    >
      <input
        ref={ref}
        onChange={(e) => handleChangeFunction(e)}
        className={`bg-transparent border-none h-full w-full text-gray1 outline-none`}
        type="text"
        value={searchValue}
        placeholder="Поиск"
      />
      {searchValue.length > 3 ? (
        <X color="gray" onClick={clearInput} className="cursor-pointer" />
      ) : (
        <Search color="gray" />
      )}
    </div>
  );
};
function useFocus(
  input: React.RefObject<HTMLInputElement>,
  arg1: boolean
): [any, any] {
  throw new Error("Function not implemented.");
}
