import React from "react";
import {  useSelector } from "react-redux";
import { Scontenedordetalle, ScontenP, ScontenSumary, Sdetalleabajo, Sdetallearriba, Sdietas, SdivImgD, Shr, Sinfodetalle, Snivel, StituloDetalle, Sul } from "./css/detalle";


export function Carddetalle(prop){
    const err=useSelector(P=>P.error)
    let detalles={...prop}
   
    return(
        err?<h1>{err}</h1>:
        <Scontenedordetalle>
            {detalles.name?<div>
                <StituloDetalle>{detalles.name}</StituloDetalle>
            <Shr/>
          
            </div>
            :
            <>
                <StituloDetalle>title</StituloDetalle>
                <Shr/>
            </>
            }
            <Sdetallearriba>
            <SdivImgD>
            {detalles.img?<img src={detalles.img} alt='ups falta imagen'/>:
            <img src="" alt=""/>}
            </SdivImgD>
            
            <ScontenSumary>
                <span>Summary</span>
            <Shr/>
            <ScontenP 
            dangerouslySetInnerHTML={{
                __html: detalles?.resumen?.replace(/\n/g, "<br />"),
            }}/>
            </ScontenSumary>
            
            </Sdetallearriba>
            <Sdetalleabajo>

           <Sinfodetalle>
           <span>health Score</span>
           <Shr/>
            <Snivel>{detalles?.nivel}%</Snivel>
            <br/>
            <span>Dish Types</span>
            <Shr/>
            {detalles.plato?detalles.plato.map(p=>{
                return(
                    <Snivel key={p}>
                        <span>{p}</span>
                    </Snivel>
                )
            }):null}
            <br/>
            <span>Dites</span>
            <Shr/>
                {detalles.dietas?.map(p=>{
                    return(
                        <Sdietas key={p}>
                        <span >#{p}</span>
                    {detalles.btndietas?detalles.btndietas(p):null}
                        <br/>
                    </Sdietas>
                )
            })}
           
            </Sinfodetalle>
            <Sul>


{detalles.pasos?
<ScontenSumary>
    <span>Analyzed Instructions</span>
<Shr/>
<ul key='lista'>
{detalles.pasos[0]?.length>0?detalles.pasos[0].map(p=>{
    return(
        <li key={p.item}>
        <Sdietas>
        <span>{`${p.item}: ` }</span>
        <ScontenP 
            dangerouslySetInnerHTML={{
                __html: p?.text?.replace(/\n/g, "<br />"),
            }}/>
        {detalles.bttnpasos?detalles.bttnpasos(p.item):null}
        </Sdietas>
        </li>
      )
    }):<span>up! Analyzed Instructions not found</span>}
    </ul>
    </ScontenSumary>
    :null}
    </Sul>
            </Sdetalleabajo>
        </Scontenedordetalle>
    )
}