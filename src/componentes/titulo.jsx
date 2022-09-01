import React from "react"; 
import { NavLink } from "react-router-dom";
import {Stitulo} from './css/titulocss.js'
 import img from './img/ladingLogo.png'
export function Title(){

    return (
    <Stitulo>
        <img src={img} alt='logo'/>
        <NavLink className='NavLink' to='/home'>
        <h1>MY KITCHEN DIARY</h1>
        </NavLink>
    </Stitulo>
    )}