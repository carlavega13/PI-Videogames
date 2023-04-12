import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByName } from "../../redux/actions";
import s from "./SearchBar.module.css"

const SearchBar=()=>{
    //! este name capturara lo que el input para mandarlo a la action y de ahi al back para buscar por numero 
    const [name,setName]=useState("")
    const dispatch=useDispatch()

    //! esta funcion me permite no usar el boton buscar y usar el enter 
    const enter=(event)=>{
        if(event.keyCode===13){
        if(name.trim()===""){
            alert("You have to enter a name")
        }else{
            
            dispatch(getVideogamesByName(name.trim()))
            setName("")
        }
  }
     }

     const handlerButton=()=>{
        if(name.trim()===""){
            alert("You have to enter a name")
        }else{
            
            dispatch(getVideogamesByName(name.trim()))
            setName("")
        }
     }

    return(

        <div>
            <input className={s.inputS} type="text" value={name} onKeyUp={enter} onChange={(e)=>setName(e.target.value)}/>
            
            <button className={s.butt} onClick={handlerButton}>BUSCAR</button>
       
         </div>
    )
}
export default SearchBar