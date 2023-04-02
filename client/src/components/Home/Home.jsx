
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import Paginates from "../Paginated/Paginated";

import s from"./Home.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../redux/actions";

function Home() {
  const [page,setPage]=useState(1)
  const dispatch=useDispatch()


  //!     AGARRO A TODOS LOS VIDEOJUEGOS (ANTES PREGUNTO SI ESTAN "?")
  const{ gamesCopia,allVideogames }= useSelector((state)=>state)

let sliceVideogame=gamesCopia

useEffect(()=>{
sliceVideogame=gamesCopia?.slice(page*15,page*15+15)
if(allVideogames.length===0){
  dispatch(getAllVideogames())
}
},[page,gamesCopia])

    return (
      <div className={s.principalBox}>
        <NavBar />
        <Paginates page={page} setPage={setPage} gamesCopia={gamesCopia?.length}/>
        <Cards sliceVideogame={sliceVideogame}/>
      </div>
    );
  }
  
  export default Home;
  