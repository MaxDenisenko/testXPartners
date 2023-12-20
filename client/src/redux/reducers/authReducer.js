import { AUTH_DATA_USER, AUTH_LOGOUT, HAS_ERROR, LOADING } from "../const"

const initialState = {
    isLogin: false,
    isLoading: false,
    hasError: false
}

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_DATA_USER: 
            return {...state, ...action.payload, isLogin: !state.isLogin}
        case AUTH_LOGOUT:
            return initialState
        case LOADING:
            return {...state, isLoading: !state.isLoading}
        case HAS_ERROR:
            return {...state, hasError: !state.hasError, error:action.payload}
        default:
            return state
    }
}


export default authReducers