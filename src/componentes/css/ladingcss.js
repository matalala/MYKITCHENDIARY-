import styled from "styled-components";
import imgFondo from '../img/imganenFondo.png'
export const Myh1=styled.h1`
 color:#fff;
 
font-family: Abhaya Libre;
`;
export const ImgFondo=styled.div`
background-image:url(${imgFondo});
background-repeat: no-repeat;
 background-size: contain;
  background-position: center;
height: 100%;

`;
export const Fondo=styled.div`
height: 100%;
width: 100%;
`
export const ImgLogo=styled.img`
max-width: 200;
max-height: 200px;
margin-top: 15%;
`;
export const Myh3=styled.h3`
color: #fff;

font-family: Abhaya Libre;
`;
export const MyButton=styled.button`
font-size: 40px;
border-radius: 15%;
font-family: Abhaya Libre;
transition: all 1s ease-out;
color: #000;
border:solid #000;
background: #F7B5B5;
&:hover{
  color: #fff;
  border:solid #fff;
  background: #000;
font-family: Abhaya Libre;
transition: all 1s ease-out;
}
`;