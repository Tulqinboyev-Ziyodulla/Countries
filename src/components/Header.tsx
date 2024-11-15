import React, { useContext } from "react";
import { Context } from "../context/Context";
import { CountryType } from "./CountriesList";

interface HeadType {
  title: string;
}

const Header = ({ title }: HeadType) => {
  const { counties, setCounties, refresh, setRefresh } = useContext(Context);
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase();
    const filteredData = counties.filter((item: CountryType) =>
      item.name.toLowerCase().includes(value)
    );

    setCounties(filteredData);

    if (!value) {
      setRefresh(!refresh);
    }
  }

  return (
    <header>
      <div className="flex justify-between items-center bg-blue-400 p-5">
        <h1 className="font-bold text-[30px]">{title}</h1>
        <input
          onChange={handleChange}
          className="p-2 w-[300px] rounded-md outline-none border-slate-600 mt-3 ml-5 text-[18px]"
          type="text"
          placeholder="Searching...."
        />
      </div>
    </header>
  );
};

export default Header;
