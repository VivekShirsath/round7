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
        <div>
            <h2>Top Countries in {unique.name} for your next holiday</h2>
          {
            unique.countries.map(({id,image,name}) => {
                return(
                    <NavLink to ={"/destinations/" + id} key={name}>
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