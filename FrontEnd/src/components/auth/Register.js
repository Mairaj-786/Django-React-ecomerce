import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { authMethod } from '../../redux/actions/authMethod';


const Register = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        first_name: '',
        username: '',
        email: '',
        password: '',
    })

    const handleInputs = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(authMethod(state))
    }
    return (
        <div className="login">
            <div className="login_wrapper">
                <h2>Create an account</h2>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <input type="text" onChange={handleInputs} name="first_name" class="form-control" placeholder="First Name" />
                    </div>
                    <div class="form-group">
                        <input type="text" onChange={handleInputs} name="username" class="form-control" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <input type="email" onChange={handleInputs} name="email" class="form-control" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <input type="password" onChange={handleInputs} name="password" class="form-control" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <button className="btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
