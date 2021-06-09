import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/products.css';
import { useSelector, useDispatch } from 'react-redux';
import { PRODUCT_FETCHING, CLOSE_LOADING, SET_LOADING } from '../../redux/constant/actionTypes';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';



const Products = () => {
    const dispatch = useDispatch();
    const { products, loading, search_product } = useSelector(state => state.productReducer)


    useEffect(() => {
        dispatch({ type: SET_LOADING, payload: { loading: true } })
        const apiUrl = 'http://127.0.0.1:8000/product';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: PRODUCT_FETCHING, payload: data })
                dispatch({ type: CLOSE_LOADING, payload: { loading: false } })
                console.log('This is your data', data)
            });
    }, [])






    return (
        <div className="products">
            <div className="container">
                <h4>Just For You</h4>
                <div className="row">
                    {search_product
                        ?
                        search_product.map((filtered) => (

                            <div className="col-lg-3 col-md-4 col-6  text-center  ">
                                <Fade cascade>
                                    <div className="product_img">
                                        <Link to={`/details/${filtered.id}`}>
                                            <img src={filtered.image} />
                                        </Link>
                                    </div>
                                    <div className="product_desc_price">
                                        <span>{filtered.title}</span>
                                        <h4>${filtered.price}</h4>
                                    </div>
                                </Fade>
                            </div>
                        ))
                        :
                        products.map((product) => (
                            <div className="col-lg-3 col-md-4 col-6  text-center  ">
                                <Zoom cascade>
                                    <div className="product_img">
                                        <Link to={`/details/${product.id}`}>
                                            <img src={product.image} />
                                        </Link>
                                    </div>
                                    <div className="product_desc_price">
                                        <span>{product.title}</span>
                                        <h4>${product.price}</h4>
                                    </div>
                                </Zoom>
                            </div>

                        ))
                    }



                    {
                        loading
                            ?
                            <div className="loading">
                                <h2>Loading....</h2>
                            </div>
                            :
                            ''
                    }
                </div>
            </div>

        </div>
    )
}

export default Products
