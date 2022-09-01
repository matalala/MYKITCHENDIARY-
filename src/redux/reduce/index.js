import { 
    GET_TODO,
    DEFAULT,
    GET_DIETAS,
    GET_FILTER,
    GET_ID,
    GET_CREATE,
    ERROR

} from "../actions";

const stadoInicial={
    recetas:[],
    recetasDetalle:{},
    dietas:[],
    error:'',
    filterdiet:'Diets',
    otrofilter:'default',
    respuestapost:''
}
let ordenar=function (a, b) {
    if (a.name.toLowerCase() > b.name[0].toLowerCase()) {
      return 1;
    }
    if (a.name[0].toLowerCase() < b.name[0].toLowerCase()) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }
  let ordenarA=function (a, b) {
    if (a.nivel < b.nivel) {
      return 1;
    }
    if (a.nivel > b.nivel) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }

const rootReduce=(state=stadoInicial,action)=>{

    switch (action.type) {
        case ERROR:
            return{
                ...state,
                error:action.payload
            }
        case GET_CREATE:
            return{
                ...state,
                respuestapost:action.payload
            }
        case GET_ID:
            return{
                ...state,
                recetasDetalle:action.payload[0]
            }
       
        case GET_TODO:
            let respuesta =[...action.payload]
            if(respuesta.length===0){
                return{
                    ...state,
                    error:'The recipes with these characteristics were not found'
                }
             }
            
            if(state.filterdiet!=='Diets'){
                 state.filterdiet?respuesta=respuesta.filter(p=>p.dietas.includes(state.filterdiet)):
                 respuesta=[...action.payload]
                 if(!respuesta.length){
                    return{
                        ...state,
                        error:'The recipes with these characteristics were not found'
                    }
                 }
            }
           
            if(state.otrofilter==='A-Z'){
                respuesta=respuesta.sort(ordenar)
                return{
                    ...state,
                    recetas:[...respuesta],
                    error:''
                }
            }
            if(state.otrofilter==='Z-A'){
                respuesta=respuesta.sort(ordenar)
                respuesta.reverse()
                return{
                    ...state,
                    recetas:[...respuesta],
                    error:''
                }
            }
            if(state.otrofilter==='Score +'){
                respuesta=respuesta.sort(ordenarA)
                return{
                    ...state,
                    recetas:[...respuesta],
                    error:''
                }
            }
            if(state.otrofilter==='Score -'){
                respuesta=respuesta.sort(ordenarA)
                respuesta.reverse()
                return{
                    ...state,
                    recetas:[...respuesta],
                    error:''
                }
            }
            return{
                ...state,
                recetas:[...respuesta],
                error:''
            }
            
        case DEFAULT:
            return{
              ...state,
              [action.payload.key]:action.payload.value

            }
        case GET_DIETAS:
            return{
                ...state,
                dietas:[...action.payload]
            }
        case GET_FILTER:
            if(action.payload['data']==='dietas'){
                return{
                    ...state,
                    filterdiet:action.payload.value
                }
            }
            if(action.payload['data']==='A-Z'){
                return{
                    ...state,
                    otrofilter:'A-Z'
                }
            }
            if(action.payload['data']==='Z-A'){
                return{
                    ...state,
                    otrofilter:'Z-A'
                }
            }
            if(action.payload['data']==='Score +'){
                return{
                    ...state,
                    otrofilter:'Score +'
                }
            }
            if(action.payload['data']==='Score -'){
                return{
                    ...state,
                    otrofilter:'Score -'
                }
            }
            
            return{
                ...state
            }
        default:
          return{
            ...state
          }
    }
    
}
export default rootReduce;