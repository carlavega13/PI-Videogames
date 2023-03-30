import { useEffect } from "react";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../redux/actions";

function Home() {
  const dispatch=useDispatch()

  useEffect(()=>{
   dispatch( getAllVideogames())
   
  },[])
    return (
      <div>
        <h1>COMPONENTE HOME</h1>
        <NavBar/>
        <Cards/>
      </div>
    );
  }
  
  export default Home;
  