import { useData } from "../DataContext"
import { NavLink } from "react-router-dom";

export const Home = () => {
    const {data,continent,setContinent} = useData();
    return(
        <div className="flex flex-col justify-center items-center">
           <h2> Welcome to Trip Advisor</h2>
           <h2>Top Continents for your next holiday</h2>
           {
            data.continents.map(({name,image,id}) => {
                return(
                    <NavLink to ={"/category/" + id} key={name}>
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