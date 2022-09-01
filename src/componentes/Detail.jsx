import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Fdefault, getID } from "../redux/actions";
import { Carddetalle } from "./card-detalle";
import { Title } from "./titulo";


export function Detail(){
    const dispatch=useDispatch()
    const detalles=useSelector(p=>p.recetasDetalle)
    let {id}=useParams('id')
    React.useEffect(()=>{
        dispatch(getID(id))
        return()=>{
            dispatch(Fdefault({key:'recetasDetalle',value:{}}))
        }
    },[dispatch,id])
    return(
        <>
        <Title/>
        <Carddetalle
        {...detalles}
        />
        </>
    )
}