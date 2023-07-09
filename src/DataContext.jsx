
import { createContext,useContext,useState} from "react";
import { data1 } from "./data";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [data,setData] = useState(data1);
    const [country,setCountry] = useState();
    const [continent,setContinent] = useState();
    const [destination,setDestination] = useState();

    return(
        <DataContext.Provider value={{data,country,setCountry,continent,setContinent
        ,destination,setDestination}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)