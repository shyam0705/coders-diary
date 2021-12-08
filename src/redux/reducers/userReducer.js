import { GOOGLE_LOGIN_FAILED, GOOGLE_LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, LOGOUT_START, LOGOUT_SUCCESS, REGISTER_FAILED, REGISTER_SUCCESS, SET_USER, SET_USER_DATA } from "../actions/actionTypes";

const intialState={
    loading:false,
    user:null,
    leetcode:null,
    error:null,
    leetcode:"",
    gfg:"",
    codeforces:"",
    codechef:"",
    collegeName:""
}

export const userReducer=(state=intialState,action)=>{
    switch(action.type)
    {
        case LOGIN_START:
            return {...state,loading:true}
        case GOOGLE_LOGIN_SUCCESS:
        case REGISTER_SUCCESS:        
        case LOGIN_SUCCESS:
            return {...state,loading:false,user:action.payload} 
        case LOGIN_FAILED:
        case GOOGLE_LOGIN_FAILED:
        case REGISTER_FAILED:  
            return {...state,loading:false,error:action.payload} 
        case LOGOUT_START:
            return {...state,loading:true}
        case LOGOUT_SUCCESS:
            return {loading:false,user:null,leetcode:null,error:null}  
        case LOGIN_FAILED:
            return {...state,error:action.payload}  
        case SET_USER:
            return {...state,user:action.payload} 
        case SET_USER_DATA:
            return {...state,codechef:action.payload.codechef,codeforces:action.payload.codeforces,leetcode:action.payload.leetcode,collegeName:action.payload.collegeName}                    
        default:
            return state;
    }
}
