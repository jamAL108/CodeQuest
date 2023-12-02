import {
    
} from './actionTypes';

const initialstate ={
    navcolor:false,
    logincolor:false,
    artistid:{},
    userexit:false,
    cancel:false
}

const props =(state=initialstate , action) =>{
    switch(action.type){
        default:
            return state;    
    }
}

export default props;
