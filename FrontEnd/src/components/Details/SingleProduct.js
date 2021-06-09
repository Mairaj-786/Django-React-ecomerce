import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import '../Style/single_product.css'
import { DETAIL_PRODUCT_FETCHING } from '../../redux/constant/actionTypes';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
const SingleProduct = () => {

    const dispatch = useDispatch();
    const { Single_Product } = useSelector(state => state.productReducer)
    const { id } = useParams()



    useEffect(() => {
        const apiUrl = `http://127.0.0.1:8000/product/${id}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: DETAIL_PRODUCT_FETCHING, payload: data })
            });
    }, [])
    return (
        <>
            <div className="single_product">
                <div className="container">
                    <div className="single_product_wrapper">
                        <div className="IMG">
                            <img src={Single_Product.image} />
                        </div>
                        <div className="desc">
                            <div className="form-group">
                                <span id="new">{Single_Product.category}</span>
                            </div>
                            <h3>{Single_Product.title}</h3>
                            <label>Product code</label>
                            <h4>${Single_Product.price}</h4>
                            <div className="form-group">
                                <strong>Available:<span>in Stock</span></strong>
                            </div>
                            <div className="form-group">
                                <strong>Condition:<span>New</span></strong>
                            </div>
                            <div className="form-group">
                                <strong>Brand:<span>Hunk</span></strong>
                            </div>
                            <div className="quintity">
                                <div className="qty_number d-flex">
                                    <strong>Quintity:</strong>
                                    <div className="inc_desc">
                                        <div class="input-group-inc-desc">
                                            <span class="input-group-btn">
                                                <span class="glyphicon glyphicon-minus" ><RemoveIcon /></span>
                                            </span>
                                            <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="100" />
                                            <span class="input-group-btn">
                                                <span class="glyphicon glyphicon-plus"><AddIcon /></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn">
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SingleProduct
