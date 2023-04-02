const Paginates=(props)=>{
    let numbers=[]
let aux=1
let cantidad=props?.gamesCopia

while(cantidad>0){
cantidad=cantidad-15

if(cantidad>0){
    
    numbers.push(aux)
    aux++
    
}
}
 
const handlerPaginater=(numero)=>{
props.setPage(numero)
}
const handlerAdelante=()=>{
    if(props.page<aux-1){
         props.setPage(props.page+1)
    }}

    
    const handlerAtras=()=>{
        if(props.page>1){
             props.setPage(props.page-1)
        }
   

}
return(
    <div>
         <button onClick={handlerAtras}>{"<"}</button>
        {
            numbers?.map(numero=>{
                return <button onClick={()=>handlerPaginater(numero)} key={numero}>{numero}</button>
            })
        }
        <button onClick={handlerAdelante}>{">"}</button>
    </div>
)
}
export default Paginates