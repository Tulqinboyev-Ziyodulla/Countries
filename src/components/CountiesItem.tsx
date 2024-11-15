import { CountryType } from "./CountriesList"

const CountiesItem:React.FC<{item:CountryType}> = ({item}) => {
  return (
    <div className="w-[300px] p-3 rounded-md bg-slate-200">
        <img className="h-[200px] rounded-md" src={item.img} alt="img" width={"100%"} height={200} />
        <h2 className="text-[23px] font-bold mb-2">{item.name} - {item.flagIcon.toUpperCase()}</h2>
        <p className="text-slate-500 ">{item.capital} - {item.population}</p>
    </div>
  )
}

export default CountiesItem
