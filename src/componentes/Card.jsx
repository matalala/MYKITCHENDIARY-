import React from "react";
import { NavLink } from "react-router-dom";
import {  Sboton, SCaraAtrasCard, ScaraatrascontenCard, SCaraCard, SCartaCard, ScontenedorCard } from "./css/cardcss";


   
export function Card({id,name,dietas,img}){
    return(
        <ScontenedorCard key={id} >
            <SCartaCard>
                <SCaraCard>
                    <img src={img} alt=""/>
                </SCaraCard>
                
                <SCaraAtrasCard>
                    <ScaraatrascontenCard>
                    <span>{name}</span>
                    <br/>
                    <br/>
                    <div>
                        {dietas?.map(p=>{
                            return(
                                <div key={p}>
                                <span key={p}>{p}</span>
                                <br/>
                                </div>
                                )
                            })}
                    </div>
                    <br/>
                    <NavLink to={`/detail/${id}`}>
                        
                    <Sboton>more...</Sboton>
                            
                    </NavLink>
                    </ScaraatrascontenCard>
               </SCaraAtrasCard>
            </SCartaCard>
        </ScontenedorCard>
    )
}