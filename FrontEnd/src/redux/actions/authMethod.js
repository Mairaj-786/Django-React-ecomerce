import axios from "axios";
import { CLOSE_LOADING, SET_LOADING } from "../constant/actionTypes";
import { REGISTER_FAIL, REGISTER_SUCCESS } from "../constant/authActionTypes";

export const authMethod = (state) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        };
        dispatch({ type: SET_LOADING, payload: { loading: true } })
        try {
            const { data } = await axios.post('http://127.0.0.1:8000/api/register', state, config);
            console.log(data)
            dispatch({ type: REGISTER_SUCCESS, payload: data })
        } catch (err) {
            dispatch({ type: REGISTER_FAIL, payload: err.error })
            dispatch({ type: CLOSE_LOADING, payload: { loading: false } })
            console.log({ error: err.response.data })

        }
    }
}