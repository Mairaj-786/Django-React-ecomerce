import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import productReducer from '../redux/Reducers/ProductReducer';


const TestApi = () => {
    const dispatch = useDispatch();



    return (
        <div className="pt-5 mt-4">
            TestApi
            TestApi
        </div>
    )
}

export default TestApi
