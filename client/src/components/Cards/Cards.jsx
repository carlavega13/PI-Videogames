import { useSelector } from "react-redux";
import Card from "../Card/Card";
import s from "./Cards.module.css"

function Cards () {
  //!     AGARRO A TODOS LOS VIDEOJUEGOS (ANTES PREGUNTO SI ESTAN "?")
  const allVideogames = useSelector((state)=>state?.allVideogames)

//!    RETURN EL MAP QUE RENDERIZA 1 CARD POR CADA JUEGO 
    return (
      <div className={s.principalBox}>

        {/* //? MAP 1 CARD POR JUEGO */}
        {
         allVideogames?.map(({img,name,genres,rating,id})=>{
          
          return <Card key={id} id={id} name={name} img={img} genres={genres} rating={rating} />
         })

        }
        <Card/>
      </div>
    );
  }
  
  export default Cards;
  