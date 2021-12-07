// import { auth, provider } from "../../firebase"
import { GOOGLE_LOGIN_FAILED, GOOGLE_LOGIN_START, GOOGLE_LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, LOGOUT_FAILED, LOGOUT_START, LOGOUT_SUCCESS, REGISTER_FAILED, REGISTER_START, REGISTER_SUCCESS, SET_USER } from "./actionTypes"
import { signOut,getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
//for registration
import { initializeApp } from "firebase/app";

 import { firebaseConfig } from "../../firebase"; 
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
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
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch(registerSuccess(user));
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            dispatch(registerFails(errorMessage));
            // ..
        });
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
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch(loginSuccess(user));
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            dispatch(loginFails(errorMessage));
        });
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

// export const googleLoginIntiate=()=>{
//     return function(dispatch){
//         dispatch(googleLoginStart());
//         auth.signInWithPopup(provider)
//             .then((user)=>{
//                 dispatch(googleLoginSuccess(user));
//             })
//             .catch((err)=>{
//                 dispatch(googleLoginFails(err.message));
//             })
//     }
// }

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
        signOut(auth).then(() => {
            dispatch(logoutSuccess);
            // dispatch(setUser(null));
          }).catch((error) => {
            dispatch(logoutFailed(error.message));
          });
          
    }
}

export const setUser=(user)=>{
    return{
        type:SET_USER,
        payload:user
    }
}