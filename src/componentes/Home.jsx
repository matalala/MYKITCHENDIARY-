import React from "react";
import { Cards } from "./Cards";
import Nav from "./Nav";
import { Title } from "./titulo";


export function Home(){
    return(
        <div>
        <Title/>
        <Nav/>
        <Cards/>
        </div>
    )
}