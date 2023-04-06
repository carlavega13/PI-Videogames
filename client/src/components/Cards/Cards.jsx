

import Card from "../Card/Card";
import s from "./Cards.module.css"


function Cards (props) {

    return (
      <div className={s.principalBox}>
        {/* //? MAP 1 CARD POR JUEGO */}
        {
        props.sliceVideogame?.map((game)=>{
          if(game.img){
                  return <Card key={game.id} id={game.id} name={game.name} img={game.img} genres={game.genres?game.genres:game.Genres} rating={game.rating} />
          }
    
         })

        }
       
      </div>
    );
  }
  
  export default Cards;
  