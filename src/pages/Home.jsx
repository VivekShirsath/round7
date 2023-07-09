import { useData } from "../DataContext"
import { NavLink } from "react-router-dom";

export const Home = () => {
    const {data,continent,setContinent} = useData();
    return(
        <div>
           <h2> Welcome to Trip Advisor</h2>
           <h2>Top Continents for your next holiday</h2>
           {
            data.continents.map(({name,image,id}) => {
                return(
                    <NavLink to ={"/category/" + id} key={name}>
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