"use client";

import React from "react";
import { Search, X } from "lucide-react";

export const SearchHeader = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  const handleChangeFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const clearInput = () => {
    setSearchValue("");
  };

  React.useEffect(() => {
    console.log(searchValue);

    handleChangeFunction;
  }, [searchValue]);

  return (
    <div className="bg-[white] flex items-center py-4 pl-[25px] pr-[15px]  gap-[10px] rounded-[10px] w-[300px]">
      <input
        onChange={(e) => handleChangeFunction(e)}
        className="bg-transparent border-none h-full w-full text-gray1 outline-none"
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
