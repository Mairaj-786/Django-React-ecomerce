
import { SEARCH } from '../constant/actionTypes';
export const productReducer = (key) => {
    return (dispatch) => {
        try {
            fetch('http://127.0.0.1:8000/product?search=' + key)
                .then((data) => {
                    data.json().then((resp) => {
                        console.log('res', resp)
                        dispatch({ type: SEARCH, payload: resp })
                    })
                })
        } catch (error) {
            console.log(error)

        }
    }
}