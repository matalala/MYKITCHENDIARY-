import styled from "styled-components";


export const Sbtdieta=styled.img`
    width: 15px;
    margin: 2px;

`
export const ScontenedorCreate=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

`
export const Sformulario=styled.div`
    height: 100%;
    max-height: 80%;
    width: 100%;
    max-width: 20%;
    background-color: #F7B5B5;
    padding: 20px;
    border: solid #000;
    border-radius: 20px;
    
    input{
        margin: 5px 0;
        border-radius: 10px;
        text-align: center;
    }
    img{
        max-width: 15px;
    }
    textarea{
        margin: 5px 0;
        width: auto;
        max-width: 196px;
        border-radius: 10px;
        text-align: center;
    }
`
export const SdetalleCreate=styled.div`
width: 80%;
`
export const Serror=styled.span`
font-size: 8px;
color: red;
`