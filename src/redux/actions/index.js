const axios =require('axios')

export const GET_TODO='GET_TODO'
export const DEFAULT='DEFAULT'
export const GET_DIETAS='GET_DIETAS'
export const GET_FILTER='GET_FILTER'
export const GET_ID='GET_ID'
export const GET_CREATE='GET_CREATE'
export const ERROR='ERROR'

export const getTodo=()=>{
    return async function(dispatch){
        const respuesta= await axios.get('/recipes')
        if(respuesta.data.error){
            dispatch({type:ERROR,payload:respuesta.data})

        }else{
            
            dispatch({type:GET_TODO,payload:respuesta.data})
        }
    }

}
export const getdietas=()=>{
    return async function(dispatch){
        const respuesta= await axios.get('/diets')
        if(respuesta.error){
            dispatch({type:ERROR,payload:respuesta.data})
        }else{
            
            dispatch({type:GET_DIETAS,payload:respuesta.data})
        }
    }
}
export const Fdefault=(dato)=>{
    return{
        type:DEFAULT,
        payload:dato
    }
}
export const getFilter=(dato)=>{
  return{type:GET_FILTER,payload:dato}
}
export const getNombre=(nombre)=>{
    return async function(dispatch){
        try {
            const respuesta= await axios.get(`/recipes?name=${nombre}`)
            dispatch({type:GET_TODO,payload:respuesta.data})
            
        } catch (error) {
            dispatch({type:ERROR,payload:error.response.data.err})
            
        }
       
    }
}
export const getID=(id)=>{
    return async function(dispatch){
        try {
            const respuesta= await axios.get(`/recipes/${id}`)
            dispatch({type:GET_ID,payload:respuesta.data})
            
        } catch (error) {
            dispatch({type:ERROR,payload:error.response.data.err})
            
        }
       
    }
}
export const getDonde=(dato)=>{
    return async function(dispatch){
        try {
            if(dato==='API/BD'){
               dispatch(getTodo())
            }else{
                let respuesta= await axios.get(`/${dato}`)
                dispatch({type:GET_TODO,payload:respuesta.data})
            }
        } catch (error) {
            dispatch({type:ERROR,payload:error.response.data.err})
        }
    }
}

export const postRecipe=(obj)=>{
    return async function(dispatch){
        try {
            let respuesta= await axios.post('/recipes',obj)
            dispatch({type:GET_CREATE,payload:respuesta.data})
        } catch (error) {
            dispatch({type:ERROR,payload:error.response.data.err}) 
        }
    }
}