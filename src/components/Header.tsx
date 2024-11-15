import React, { useContext } from "react"
import { Context } from "../context/Context"
import { CountryType } from "./CountriesList"

interface HeadType {
  title:string
  extraStyle:string
  // onClick:React.MouseEventHandler<HTMLButtonElement>
}

const Header = ({title, extraStyle}:HeadType) => {
  const {counties,setCounties,refresh, setRefresh} = useContext(Context)
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    const value = (e.target as HTMLInputElement).value.toLowerCase()
    const data = counties.filter((item:CountryType) => item.name.toLowerCase().includes(value))
    setCounties(data)
    if(!value){
      setRefresh(!refresh)
    }
  }


  return (
    <header className={`${extraStyle} `}>
      <div className="flex justify-between items-center bg-blue-300 p-5">
        <h1 className="font-bold text-[25px] ">{title}</h1>
      </div>
      
      <input onChange={handleChange} className="p-2 w-[300px] rounded-md outline-none border-[1px] border-slate-600 mt-3 ml-5" type="text" placeholder="Searching...." />
    </header>
  )
}

export default Header
