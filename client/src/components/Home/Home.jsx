
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import Paginates from "../Paginated/Paginated";

import s from"./Home.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, getGenres} from "../../redux/actions";
import Loader from "../Loader/Loader";

function Home() {
  const [page,setPage]=useState(1)
  const dispatch=useDispatch()


  //!     AGARRO A TODOS LOS VIDEOJUEGOS (ANTES PREGUNTO SI ESTAN "?")
  const{ gamesCopia,allVideogames,genres }= useSelector((state)=>state)

  let sliceVideogame=gamesCopia

if(sliceVideogame.length>16){
  if(page===1){

    sliceVideogame=gamesCopia?.slice(0*15,page*15)

  }else{

    sliceVideogame=gamesCopia?.slice(page*15,page*15+15)

  }
  
}

useEffect(()=>{
  if(allVideogames?.length===0){
  console.log("haciendo get");
    dispatch(getAllVideogames())

  }


},[page,gamesCopia])
//! si recargo la pag pido denuevo los generos
if(genres?.length===0){
  dispatch(getGenres())
}
if(allVideogames.length===0){
  return(
    <Loader/>
  )
}
    return (
      <div className={s.principalBox}>
        <NavBar setPage={setPage} />
        <Paginates page={page} setPage={setPage} gamesCopia={gamesCopia?.length}/>
        <Cards page={page} sliceVideogame={sliceVideogame}/>
      </div>
    );
  }
  
  export default Home;
  