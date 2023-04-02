import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByName } from "../../redux/actions";

const SearchBar=()=>{
    const [name,setName]=useState(" ")
    const dispatch=useDispatch()
    const enter=(event)=>{
        if(event.keyCode===13){
dispatch(getVideogamesByName(name))
      event.target.value=""
  }
     }


    return(

        <div>
            <input type="text" value={name} onKeyUp={enter} onChange={(e)=>setName(e.target.value)}/>
            
            <button onClick={()=>dispatch(getVideogamesByName(name))}>Buscar</button>
       
         </div>
    )
}
export default SearchBar