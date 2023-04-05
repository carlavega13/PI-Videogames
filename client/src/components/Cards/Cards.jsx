

import Card from "../Card/Card";
import s from "./Cards.module.css"


function Cards (props) {

    return (
      <div className={s.principalBox}>
        {/* //? MAP 1 CARD POR JUEGO */}
        {
        props.sliceVideogame?.map(({img,name,genres,rating,id})=>{
          if(img){
                  return <Card key={id} id={id} name={name} img={img} genres={genres} rating={rating} />
          }
    
         })

        }
       
      </div>
    );
  }
  
  export default Cards;
  