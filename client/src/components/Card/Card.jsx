import { useRef } from "react";
import s from "./Card.module.css"
function Card(props) {
    return (
      <div className={s.principalBox}>
        {/*//? NAME DEL JUEGO */}
     <h1>{props?.name}</h1>
        {/*//? RAITING DEL JUEGO */}
     <span>{props?.rating}</span>
       {/*//? MAP PARA RENDERIZAR UN P POR GENERO  */}
       <div>
     {
      props?.genres?.map((genre)=>{
        return <p key={Math.random()}>{genre.name}</p>
      })
     }
     </div>
     <img className={s.imagen} src={props?.img} alt="Not Found"/>
      </div>
    );
  }
  
  export default Card;
  