import { GOOGLE_LOGIN_FAILED, GOOGLE_LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, LOGOUT_START, LOGOUT_SUCCESS, REGISTER_FAILED, REGISTER_SUCCESS } from "../actions/actionTypes";

const intialState={
    loading:false,
    user:null,
    leetcode:null,
    error:null
}

export const userReducer=(state=intialState,action)=>{
    switch(action.type)
    {
        case LOGIN_START:
            return {...state,loading:true}
        case GOOGLE_LOGIN_SUCCESS:
        case REGISTER_SUCCESS:        
        case LOGIN_SUCCESS:
        case LOGIN_FAILED:
        case GOOGLE_LOGIN_FAILED:
        case REGISTER_FAILED:  
            return {...state,loading:false,user:action.payload} 
        case LOGOUT_START:
            return {...state,loading:true}
        case LOGOUT_SUCCESS:
            return {loading:false,user:null,leetcode:null,error:null}  
        case LOGIN_FAILED:
            return {...state,error:action.payload}               
        default:
            return state;
    }
}
