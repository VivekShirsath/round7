import { useParams } from "react-router-dom"
import { useData } from "../DataContext";
import { NavLink } from "react-router-dom";

export const Destination = () => {
    const {id} = useParams();
    const {data,country,setCountry,destination,setDestination} = useData();

    const unique = country.countries.find((c) => c.id == id);
    setDestination(unique)
    localStorage.setItem('destination',JSON.stringify({
       data : unique,
    }));
    return(
        <div className="flex flex-col justify-center items-center">
        <h2>Top Destinations in {unique.name} for your next holiday</h2>
      {
        unique.destinations.map(({id,image,name}) => {
            return(
                <NavLink to ={"/details/" + id} target="_blank" key={name}>
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