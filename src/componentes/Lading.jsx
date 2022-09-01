import React from "react";
import imgLogo from './img/ladingLogo.png'
import {Fondo,ImgLogo,Myh1,ImgFondo, Myh3, MyButton} from './css/ladingcss.js'
import { NavLink } from "react-router-dom";


export default function Lading(){

    return(
            
        <Fondo>

        <ImgFondo >
            <ImgLogo src={imgLogo} alt= ""/>
            <Myh1>MY KITCHEN DIARY</Myh1>
            <Myh3>easy and delicious cooking recipes &#128523;</Myh3>
            <NavLink to='/home'>
            <MyButton>HOME</MyButton>
            </NavLink>
        </ImgFondo>
        </Fondo>
    )
}