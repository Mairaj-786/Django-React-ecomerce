import React, { useEffect, useState } from 'react'
import '../Style/login.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN_SUCCESS } from '../../redux/constant/authActionTypes'
const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { access_token } = useSelector(state => state.authReducer)

    const [state, setState] = useState({
        username: '',
        password: ''
    })


    useEffect(() => {
        if (access_token) {
            history.push('/')
        }
    }, [access_token])



    const handleInputs = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        };
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/token/', state, config);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.access })
            localStorage.setItem('access_token', res.data.access)
        } catch (error) {
            console.log({ error })

        }
    }
    return (
        <div className="login">
            <div className="login_wrapper">
                <h2>Login Here</h2>
                <form onSubmit={handleLogin}>
                    <div class="form-group">
                        <input type="text" onChange={handleInputs} value={state.username} name="username" id="" class="form-control" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <input type="text" onChange={handleInputs} value={state.password} name="password" id="" class="form-control" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <button className="btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
