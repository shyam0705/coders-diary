import { auth, provider } from "../../firebase"
import { GOOGLE_LOGIN_FAILED, GOOGLE_LOGIN_START, GOOGLE_LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, LOGOUT_FAILED, LOGOUT_START, LOGOUT_SUCCESS, REGISTER_FAILED, REGISTER_START, REGISTER_SUCCESS } from "./actionTypes"

//for registration

const registerStart=()=>{
    return{
        type:REGISTER_START
    }
}
const registerFails=(err)=>{
    return {
        type:REGISTER_FAILED,
        payload:err
    }
}
const registerSuccess=(user)=>{
    return {
        type:REGISTER_SUCCESS,
        payload:user
    }
}

//main intiator for registration
export const registerIntiate=(email,password,displayName)=>{
    return function(dispatch){
        dispatch(registerStart());
        auth.createUserWithPassword(email,password)
            .then((user)=>{
                user.updateProfile({
                    displayName
                })
                dispatch(registerSuccess(user));
            })
            .catch((err)=>{
                dispatch(registerFails(err.message));
            })
    }
}


//for login
const loginStart=()=>{
    return{
        type:LOGIN_START
    }
}
const loginFails=(err)=>{
    return {
        type:LOGIN_FAILED,
        payload:err
    }
}
const loginSuccess=(user)=>{
    return {
        type:LOGIN_SUCCESS,
        payload:user
    }
}

//main intiator for login
export const loginIntiate=(email,password)=>{
    return function(dispatch){
        dispatch(loginStart());
        auth.signInUserWithPassword(email,password)
            .then((user)=>{
               
                dispatch(loginSuccess(user));
            })
            .catch((err)=>{
                dispatch(loginFails(err.message));
            })
    }
}

//for google login
const googleLoginStart=()=>{
    return{
        type:GOOGLE_LOGIN_START
    }
}
const googleLoginFails=(err)=>{
    return {
        type:GOOGLE_LOGIN_FAILED,
        payload:err
    }
}
const googleLoginSuccess=(user)=>{
    return {
        type:GOOGLE_LOGIN_SUCCESS,
        payload:user
    }
}

export const googleLoginIntiate=()=>{
    return function(dispatch){
        dispatch(googleLoginStart());
        auth.signInWithPopup(provider)
            .then((user)=>{
                dispatch(googleLoginSuccess(user));
            })
            .catch((err)=>{
                dispatch(googleLoginFails(err.message));
            })
    }
}

//for logout

const logoutStart=()=>{
    return{
        type:LOGOUT_START
    }
}

const logoutSuccess=()=>{
    return {
        type:LOGOUT_SUCCESS
    }
}

const logoutFailed=(err)=>{
    return {
        type:LOGOUT_FAILED,
        payload:err
    }
}

export const logoutIntiate=()=>{
    return function(dispatch){
        dispatch(logoutStart);
        auth.signOut()
            .then((resp)=>{
                dispatch(logoutSuccess());
            })
            .catch((err)=>{
                dispatch(logoutFailed(err.message));
            })
    }
}