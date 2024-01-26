import * as act from './actionTypes.js';

const initialstate ={
    signuperror:"",
    loginerror:"",
    email:"",
    sections:[]
}

const props =(state=initialstate , action) =>{
    switch(action.type){
        case act.SIGNUPERROR:
            return{
                ...state , signuperror:action.payload
            }
        case act.LOGINERROR:
            return{
                ...state , loginerror:action.payload
            }
        case act.EMAIL:
            return{
               ...state ,email:action.payload
            }    
        case act.SECTIONS:
            return{
                ...state , sections:action.payload
            }
        default:
            return state;    
    }
}

export default props;
