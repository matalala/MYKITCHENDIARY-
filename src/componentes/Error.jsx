import React from "react";
import { NavLink } from "react-router-dom";
import { ScontenError } from "./css/error";
import { MyButton } from "./css/ladingcss";
export function Error({msj,boton}){
    return(
        <ScontenError>
            <h1>404</h1>
            <h2>Not Fond</h2>
            <span>{`${msj}`}</span>
            <br/>
            {boton===true?
            <NavLink to='/home'>
                <MyButton>home</MyButton>
            </NavLink>
                :null}
        </ScontenError>
    )
}