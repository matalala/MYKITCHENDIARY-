import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Fdefault, getdietas, postRecipe } from "../redux/actions";
import { Carddetalle } from "./card-detalle";
import { Sbtdieta, ScontenedorCreate, SdetalleCreate, Serror, Sformulario } from "./css/create";
import icono from './img/mas.png'
import imgeliminar from './img/btneliminar.png'
import { Title } from "./titulo";

function validate(input) {
    const errors = {};
    if (!input.name) {
      errors.name = "The name is required.";
    }
    if ( !/^[a-zA-Z ]+$/.test(input.name)) {
      errors.name = "Only letters and spaces.";
    }
    if ( !/^[\s\S]{3,25}$/.test(input.name)) {
      errors.name = "Must be between 3 and 25 characters.";
    }
    if(input.name[0]===' '){
      errors.name = "Can't start a by a space.";
    }
    if ( !/https?:\/\/(www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&//=]*)/.test(
      input.img
      )){
        errors.img = "The a valid image URL.";
      }
    if (!input.img) {
      errors.img= "The image is required."
    }
    if (input.resumen=== "") {
      errors.resumen = "The summary is required.";
    }
    if(input.resumen[0]===' '){
      errors.resumen = "Can't start a by a space.";
    }
    if (!input.nivel) {
      errors.nivel = "Required Field.";
    }
    if(isNaN(input.nivel+2)||input.nivel>100||input.nivel<0){
      errors.nivel= " must be a number between 0 and 100"
    }
    if(!input.pasos[0]?.length){
      errors.pasos= "The steps is required."
    }
    
    if(!input.dietas.length){
      errors.dietas="The diets is required."
    }
    console.log(input)
    console.log(errors)
    return errors;
  }

export function Create(){
    //const url=window.location.pathname
    const dispatch=useDispatch()
    const dietas=useSelector(P=>P.dietas)
    const respuesta=useSelector(P=>P.respuestapost)
    let history=useHistory()
    let [input,sinput]=React.useState({
        name:'',
        resumen:'',
        dietas:[],
        img:'',
        pasos:[[]],
        nivel:'',plato:[]
    })
    let [paso,spasos]=React.useState('')
    let [error,serror]=React.useState({})
    let [boton,sboton]=React.useState('true')

    React.useEffect(()=>{
      
      dispatch(getdietas())
      if(error.img||error.name||error.nivel||error.resumen||
        error.pasos||error.dietas){
          sboton('true')
      }else
        if(input.img!==''&&input.name!==''&&input.nivel!==''&&input.resumen!==''
        &&input.pasos[0].length>0&&input.dietas.length){
            if(!error.img&&!error.name&&!error.nivel&&!error.resumen&&
    !error.pasos&&!error.dietas){
        sboton('false')
    } 
    if(respuesta!==''){
      alert(respuesta.msj)
      sinput({ name:'',
      resumen:'',
      dietas:[],
      img:'',
      pasos:[[]],
      nivel:''})
      history.push("/home");
    }
    return()=>{
      dispatch(Fdefault({key:'dietas',value:[]}))
      dispatch(Fdefault({key:'respuestapost',value:""}))
    }
 }
 },[error,input,dispatch,respuesta,history])
const OnClickForm=(ev)=>{
    ev.preventDefault();
   
        dispatch(postRecipe(input))
    
}
const btndiet=(name)=>{
  return<Sbtdieta src={imgeliminar} alt='eliminar' onClick={()=>{
    sinput({...input,dietas:input.dietas.filter(f=>f!==name)})
    serror(validate({...input,dietas:input.dietas.filter(f=>f!==name)}))
  }}/>
  
}
const bttnpasos=(item)=>{
  return(
    <Sbtdieta src={imgeliminar} alt='eliminar'
    onClick={()=>{
      let arr=input.pasos[0].filter(f=>f.item!==item)
      arr=arr.map((p,i)=>{
        return{
          item:i+1,
          text:p.text
        }
      })
      sinput({...input,pasos:[arr]})
      serror(validate({...input,pasos:[arr]}))
    }}
    />
  )
}
const OnClickPasos=()=>{

    sinput({...input,pasos:[[...input.pasos[0],{item:input.pasos[0].length+1,text:paso}]]})
    spasos('')
  
}

const onChange=(ev)=>{
    if(ev.target.name==='dietas'){
        if(!input.dietas.includes(ev.target.value)){
          sinput({...input,dietas:[...input.dietas,ev.target.value]})
          serror(validate({...input,dietas:[...input.dietas,ev.target.value]}))
        }
    }else if(ev.target.name==='pasos'){
        spasos(ev.target.value)
        serror(validate({...input,pasos:[[...input.pasos[0],{[ev.target.name]:ev.target.value}]]}))
    }else{
        sinput({...input,[ev.target.name]:ev.target.value})
        serror(validate({...input,[ev.target.name]:ev.target.value}))
    }
}
    return(
        <div>
          <Title/>
          

            <ScontenedorCreate>

                <Sformulario>
              <form>

                <input type="text" name="name" placeholder='name' onChange={onChange} value={input.name}/>
                {error.name?
                <>
                <br/>
                <Serror>{error.name}</Serror>
                <br/>
                </>
                :null}
                <input type="text" placeholder='url' name="img"  onChange={onChange}/>
                {error.img?
                <>
                <br/>
                <Serror>{error.img}</Serror>
                <br/>
                </>
                :null}
                
                <textarea name="resumen" placeholder='summary' onChange={onChange}/>
                {error.resumen?
                <>
                <br/>
                <Serror>{error.resumen}</Serror>
                <br/>
                </>
                :null}
                <input type="text" placeholder='healt hScore' name="nivel"  onChange={onChange}/>
                {error.nivel?
                <>
                <br/>
                <Serror>{error.nivel}</Serror>
                <br/>
                </>
                :null}
                
                <textarea placeholder='analyzed Instructions' name="pasos" value={paso}  onChange={onChange}/>
                <br/>
                <img  src={icono} alt="img" onClick={OnClickPasos}/>
                <br/>
                {error.pasos?
                <>
                <br/>
                <Serror>{error.pasos}</Serror>
                <br/>
                </>
                :null}
                <select name='dietas' onChange={onChange}>
                <option value="dietas">dietas</option>
                {dietas?.map(p=>{
                  return <option key={p.name} value={p.name}>{p.name}</option>
                })}
                </select>
                {error.dietas?
                <>
                <br/>
                <Serror>{error.dietas}</Serror>
                <br/>
                </>
                :null}
                <br/>
                {boton==='true'?null:<button onClick={OnClickForm}>crear</button>}
                </form>
                </Sformulario>
            
            
            <SdetalleCreate>

            <Carddetalle
            {...input}
            btndietas={btndiet}
            bttnpasos={bttnpasos}
            />
            </SdetalleCreate>
            </ScontenedorCreate>
            
            
        </div>
    )

}