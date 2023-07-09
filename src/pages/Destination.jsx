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
        <div>
        <h2>Top Destinations in {unique.name} for your next holiday</h2>
      {
        unique.destinations.map(({id,image,name}) => {
            return(
                <NavLink to ={"/details/" + id} target="_blank" key={name}>
                <div key={name}>
                    <img src={image} className="w-48"/>
                    <h2>{name}</h2>
                </div>
                </NavLink>
            )
        })
      }
    </div>
    )
}