import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getTodo ,Fdefault} from "../redux/actions";
import { Card } from "./Card";
import { SconteneCards, SContenedorCards,SdivP } from "./css/cardscss";
import { Error } from "./Error";
import { Paginado } from "./Paginado";
export function Cards(){
const dispatch=useDispatch()
const recetas=useSelector(p=>p.recetas)
const error=useSelector(p=>p.error)
let [pagina,Spagina]=React.useState(1)
    let cantidad=9
    let ultimo= pagina * cantidad
    let primer=ultimo - cantidad
    let receta=recetas.slice(primer,ultimo)
React.useEffect(()=>{
    dispatch(getTodo())
    return()=>{
        dispatch(Fdefault({key:'recetas',value:[]}))
        dispatch(Fdefault({key:'error',value:''}))
    }
},[dispatch])
React.useEffect(()=>{
    Spagina(1)
   
},[recetas])

let paginado=(num)=>{
Spagina(num)
}

return(
    error?<Error msj={error}/>:
    <SContenedorCards>
        <SdivP>

        <Paginado
        recetas={recetas.length}
        funcionP={paginado}
        cantidad={cantidad}
        />
        </SdivP>
    <SconteneCards>
   { receta?.map(p=>{
       return (
           <Card
           id={p?.id}
           name={p?.name}
           img={p?.img}
           dietas={p?.dietas}
           key={p.id}
           />
           )
        })}
        </SconteneCards>
    
    </SContenedorCards>
)
}