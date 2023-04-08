import { useDispatch, useSelector } from "react-redux"
import { filterCards,orderCards } from "../../redux/actions"
import s from "./Filters.module.css"
const Filters=()=>{
    const dispatch=useDispatch()
    const {genres}=useSelector(status=>status)

//?    HANDLER SELECT CHANGE
const handlerSelectChange=(event)=>{

    if(event.target.name==="order"){

        dispatch(orderCards(event.target.value))

    }
    if(event.target.name==="filter"){
        dispatch(filterCards(event.target.value))
    }
    }
    return(
        <div>
            {/* //!  ORDENAMIENTO */}
            <select className={s.selectF} onChange={handlerSelectChange} name="order" >
            <option disabled="disabled" value="default" >Alphabetical Order</option>
             <option value="A-Z">A-Z</option>
             <option value="Z-A">Z-A</option>
            </select>

            <select className={s.selectF} onChange={handlerSelectChange} name="order">
            <option disabled="disabled" value="default" >Rating</option>
                <option value="Upward">Upward</option>
                <option value="Downward">Downward</option>
            </select>

                {/* //! FILTROS */}
            <select className={s.selectF} onChange={handlerSelectChange} name="filter">
                <option value="default" disabled="disabled">Genres</option>
                {
                    genres?.map((genre)=>{
                        return <option value={genre.name}>{genre.name}</option>
                    })
                }
            </select>

            <select className={s.selectF} onChange={handlerSelectChange} name="filter">
                <option value="default" disabled="disabled">Created/existing</option>
            <option value="Created">Created</option>
                <option value="Existing">Existing</option>

            </select>
        </div>
    )
}
export default Filters
