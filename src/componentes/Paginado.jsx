import React from "react";
export function Paginado({recetas,funcionP,cantidad}){
    let arr=[]
    for (let i = 0; i < Math.ceil(recetas/cantidad); i++) {
       arr.push(i+1)
    }
    return(
        <div>
            {arr?.map(p=>{
              return  <button 
                key={p}
                onClick={()=>{
                    funcionP(p)
                }}>
                    {p}
                </button>
            })}
        </div>
    )
}