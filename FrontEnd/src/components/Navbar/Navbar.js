import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { productReducer } from '../../redux/actions/productMethod';
import { LOGOUT } from '../../redux/constant/authActionTypes';

const Navbar = (props) => {
    const { access_token } = useSelector(state => state.authReducer)
    const dispatch = useDispatch();

    function handleSearch(key) {
        dispatch(productReducer(key))
    }

    const handleLogout = () => {
        localStorage.removeItem('access_token')
        dispatch({ type: LOGOUT })
    }


    return (
        <div className="top_navbar">
            <div className="wrapper">
                <div className="input_search">
                    <div className="ham" onClick={() => props.setState(!props.state)}>
                        {props.state ? <CloseIcon style={{ fontSize: '28px' }} />
                            :
                            <MenuIcon style={{ fontSize: '28px' }} />
                        }

                    </div>
                    <h2>Logo</h2>
                    <input placeholder="Search" onChange={(e) => handleSearch(e.target.value)} />
                    <span><SearchIcon style={{ fontSize: '16px' }} /></span>
                </div>
                <div className="right_side_menu">
                    {
                        access_token ? <ul>
                            <li><a href="#">Cart</a></li>
                            <li><a href="#" onClick={handleLogout}>Logout</a></li>
                        </ul> :
                            <ul>
                                <li><Link to="/cart">Cart</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li>
                                <li><Link to="/login">Log In</Link></li>
                            </ul>
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar
