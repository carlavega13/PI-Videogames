

import Card from "../Card/Card";
import s from "./Cards.module.css"


function Cards (props) {
if(props?.sliceVideogame?.length===0){
  return(
    <div className={s.error}>
      <h3 className={s.errorTitulo}>Game Not Found</h3>
      <p className={s.errorP}>The name does not match with any games, 
        Try Again</p>
      <img className={s.errorFoto} src="https://media.tenor.com/eDchk3srtycAAAAj/piffle-error.gif"/>
    </div>
  )
}
    return (
      <div className={s.principalBox}>
        {/* //? MAP 1 CARD POR JUEGO */}
        <h5 className={s.page}>{`Page:${props.page}`}</h5>
        <div className={s.cards}>
        {
        props.sliceVideogame?.map((game)=>{
     
                  return <Card key={game.id} id={game.id} name={game.name} img={game.img} genres={game.genres?game.genres:game.Genres} rating={game.rating} />
          
    
         })

        }
       </div>
      </div>
    );
  }
  
  export default Cards;
  