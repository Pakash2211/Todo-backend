import {GET_REQ,GET_DATA,GET_ERROR} from './actionType.js'



const init = {
   Todo : ["Reading"],
   padding:false,
   error:false

}

export const Reducer = (status=init,action) =>{
    switch(action.type){
        case GET_REQ : {
            return {
                ...status,padding:true
            }
        }
        case  GET_ERROR : {
            return{
                ...status,error:true,padding:false
            }
        }
        case GET_DATA : {
            return{
                ...status,error:false,padding:false,Todo : action.todo
            }
        }
        default : {
            return status;
        }
    }
}