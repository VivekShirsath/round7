
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Home } from './pages/Home'
import { Category } from './pages/Category'
import { Destination } from './pages/Destination'
import { Details } from './pages/Details'
import { useData } from './DataContext'

function App() {
  const {data,country,setCountry,destination,setDestination} = useData();
  console.log(destination)
  return (
    <>
     <Routes>
      <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:id" element={<Category/>}/>
        <Route path="/destinations/:id" element={<Destination/>}/>
        <Route path="/details/:id" element={<Details value={"slow"}/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
