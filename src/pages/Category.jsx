import { useParams } from "react-router-dom"
import { useData } from "../DataContext";
import { NavLink } from "react-router-dom";

export const Category = () => {
    const {id} = useParams();
    const {data,country,setCountry} = useData();

    const unique = data.continents.find((country) => country.id == id);
    console.log(unique);
    setCountry(unique);
    return(
        <div className="flex flex-col justify-center items-center">
            <h2>Top Countries in {unique.name} for your next holiday</h2>
          {
            unique.countries.map(({id,image,name}) => {
                return(
                    <NavLink to ={"/destinations/" + id} key={name}>
                     <div key={name} className="relative">
                        <img src={image} className="w-96 rounded-md shadow-sm p-3"/>
                        <h2 className="absolute bottom-2 left-5 text-white">{name}</h2>
                    </div>
                    </NavLink>
                )
            })
          }
        </div>
    )
}