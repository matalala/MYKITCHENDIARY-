import styled from "styled-components";

export const SCaraAtrasCard=styled.div`
background-color: #F7B5B5;
border: solid #000;
  width: 300px;
    height: 250px; 
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    backface-visibility: hidden;
   
`
export const SCartaCard=styled.div`
  transform-style: preserve-3d;
  transition: all 0.5s linear;
  ${SCaraAtrasCard}{
    transform: rotateY(180deg);
  }
`
export const ScontenedorCard=styled.div`
 perspective: 1000px;
 width: 300px;
    height: 250px; 
    margin: 20px auto;
 &:hover ${SCartaCard}{
    transform: rotateY(180deg);
 }
`

export const SCaraCard=styled.div`

border: solid #000;
   position: absolute;
    backface-visibility: hidden;
    width: 300px;
    height: 250px; 
    img{
        width: 300px;
    height: 250px; 
    }
`


export const ScaraatrascontenCard=styled.div`
margin: auto;
font-family: Abhaya Libre;

`
export const Sboton=styled.button `
    margin: 10px;
    border:  solid #000;
    border-radius: 0px;
    `