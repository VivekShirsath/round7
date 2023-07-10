import { useParams } from "react-router-dom"
import { useData } from "../DataContext";
import { NavLink } from "react-router-dom";


export const Details = () => {
    const {id} = useParams();
    const {data,country,setCountry,destination,setDestination} = useData();

  const unique  = destination.destinations.find((c) => c.id == id);
  console.log(destination)
    return(
        <div>
          <div>
            {unique.name}
          </div>
          <div>
            <img src={unique.image} className="w-48"/>
            <div>
                <h3>Description:{unique.description}</h3>
                <h3>Ratings:{unique.ratings}</h3>
                <h3>Reviews:{unique.reviews}</h3>
                <h3>Location:{unique.location}</h3>
                <h3>Opening-Hours:{unique.openingHours}</h3>
                <h3>Ticket Price:{unique.ticketPrice}
</h3>
               <a href={unique.website} target="_blank">Website </a>
            </div>
          </div>
        </div>
    )
}