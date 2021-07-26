import {INCREMENT, DECREMENT, CHANGE_THEME,DISABLE,ENABLE} from "./types"


export function increment(){
    return {
        type: INCREMENT,
    }
}

export function decrement(){
    return {
        type: DECREMENT,
    }
}

export function asyncIncrement(){
    return function(dispatch){
        dispatch(disable());
        setTimeout(()=>{
            dispatch(increment());
            dispatch(enable());
        }, 1500)
    }
}



export function disable(){
    return {
        type: DISABLE,
    }
}
export function enable(){
    return {
        type: ENABLE,
    }
}

export function changeTheme(newTheme){
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}