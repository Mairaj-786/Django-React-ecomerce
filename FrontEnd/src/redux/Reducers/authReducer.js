import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL } from "../constant/authActionTypes"

const initState = {
    access_token: '',
    RegisterSuccess: '',
    RegisterFail: ''
}

const get_accecc_token = localStorage.getItem('access_token');
if (get_accecc_token) {
    initState.access_token = get_accecc_token
}
const authReducer = (state = initState, action) => {
    if (action.type === LOGIN_SUCCESS) {
        return {
            ...state,
            access_token: action.payload
        }
    }
    else if (action.type === REGISTER_SUCCESS) {
        return {
            ...state,
            RegisterSuccess: action.payload
        }
    }
    else if (action.type === REGISTER_FAIL) {
        return {
            ...state,
            RegisterFail: action.payload
        }
    }
    else if (action.type === LOGOUT) {
        return {
            ...state,
            access_token: ''
        }
    }
    return state
}

export default authReducer