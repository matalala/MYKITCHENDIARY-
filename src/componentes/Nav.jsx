import React from "react";
// import img from './img/Pokemon-logo.png'
// import imgash from './img/Ash-Ketchum-PNG-Transparent-Image.png'
import { useDispatch, useSelector } from "react-redux";
import {getFilter, getdietas,getTodo,getNombre, Fdefault,getDonde} from '../redux/actions'
import { NavLink } from "react-router-dom";
import {InputBusqueda, ScontendorNav,Sfiltrado ,BtnEliminar,Buscar,SbtnBuscar} from "./css/navcss";
import img from './img/btneliminar.png'
import imgbuscar from './img/btnbuscar.png'
export default function Nav(){

    const dispatch=useDispatch()
    const dietas= useSelector(p=>p.dietas)
    let [AZ,SAZ]=React.useState('AZ/ZA')
    let [input,Sinput]=React.useState('')
    let [nivel,snivel]=React.useState('Score +/-')
    let [selec,Sselec]=React.useState()
    let [donde,Sdonde]=React.useState('API/BD')
    React.useEffect(()=>{
        dispatch(getdietas())
        dispatch(getDonde(donde))
       return()=>{
        dispatch(Fdefault({key:'dietas',value:[]}))
        dispatch(Fdefault({key:'recetas',value:[]}))
        dispatch(Fdefault({key:'filterdiet',value:'Diets'}))
        dispatch(Fdefault({key:'otrofilter',value:'default'}))
       }
    },[dispatch,donde])
    const handlOnClickFIL=()=>{
        if(donde==='API/BD'){
            Sdonde('API')
            dispatch(getDonde('api'))
        }else if(donde==='API'){
            
            Sdonde('BD')
            dispatch(getDonde('BD'))
        }else if(donde==='BD'){
            Sdonde('API/BD')
            dispatch(getDonde('API/BD'))
    }

    }
    const halndonChange=(ev)=>{
        Sselec(ev.target.value)
        dispatch(Fdefault({key:'filtertipo',value:''}))
        dispatch(getFilter({data:'dietas',value:ev.target.value}))
            dispatch(getDonde(donde))
    }
    const handlOnChanIn=(ev)=>{
        Sinput(ev.target.value)
    }

   



    const habdlOnclinckA=()=>{
      if(AZ==='AZ/ZA'||AZ==='Z-A'){
        snivel('Score +/-')
        SAZ('A-Z')
        dispatch(getFilter({data:'A-Z'}))
      }else if(AZ==='A-Z'){
        snivel('Score +/-')
        SAZ('Z-A')
          dispatch(getFilter({data:'Z-A'}))
      }
      dispatch(getDonde(donde))
    } 
    const onClickBut=()=>{
        dispatch(Fdefault({key:'error',value:''}))
        dispatch(getNombre(input))
        Sinput('')
    }
    const handdefault=()=>{
        dispatch(Fdefault({key:'filterdiet',value:'Diets'}))
        dispatch(Fdefault({key:'otrofilter',value:'default'}))
        Sselec('Diets')
        SAZ('AZ/ZA')
        snivel('Score +/-')
        Sdonde('API/BD')
        dispatch(getTodo())
    }
    const habdlOnclinckAtac=()=>{
        if(nivel==='Score +/-'||nivel==='Score -'){
            SAZ('AZ/ZA')
            snivel('Score +')
            dispatch(getFilter({data:'Score +'}))
        }else if(nivel==='Score +'){
            SAZ('AZ/ZA')
            snivel('Score -')
            dispatch(getFilter({data:'Score -'}))
        }
        dispatch(getDonde(donde))
    } 
    return(
        <div key='NAV'>
            <ScontendorNav >
                <Buscar>filtered by:</Buscar>
            <Sfiltrado >
                <BtnEliminar>
                    <img onClick={handdefault} src={img} alt='eliminar'/>
                </BtnEliminar>
                <div>
                <button key='d' onClick={handlOnClickFIL}>{donde}</button>
                </div>
                <div >
                    <select key='SELECT'
                    onChange={halndonChange}
                    value={selec}
                    >
                        <option key='Diets' value='Diets'>Diets</option>
                    {dietas?.map(p=>(<option key={p.name} value={p.name} >{p.name}</option>))}
                    </select>
                </div>
                <div>
                <button key='A' onClick={habdlOnclinckA}>{AZ}</button>
                </div>
                <div>
                <button key='+'  onClick={habdlOnclinckAtac}>{nivel}</button>
                </div>
                
            <NavLink  to='/create'>
                <button>Create recipe</button>
            </NavLink>
            </Sfiltrado>
                <Buscar>
                <InputBusqueda type="text" 
                value={input}
                placeholder="recipe"
                onChange={handlOnChanIn}/>
                <SbtnBuscar>
                <img src={imgbuscar} alt='buscar' onClick={onClickBut}/>
                </SbtnBuscar>
                
            </Buscar>
            </ScontendorNav>
        </div>
    )
}