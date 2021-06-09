import React from 'react'
import '../Style/delevery_staus.css';
const DeleveryStaus = () => {
    return (
        <div className="delevery_staus">
            <div className="container">
                <div className="delevery_staus_wrapper">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div className="delevery_staus_wrapper_text">
                                <p>100% Original items <span>are<br /> available at company</span></p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="delevery_staus_wrapper_text">
                                <p>Return within 30 days <span>of<br /> receiving your order</span></p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="delevery_staus_wrapper_text">
                                <p>Get free delivery for every <span>order<br /> on more than price</span></p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="delevery_staus_wrapper_text">
                                <p>Pay online through multiple<span> <br />options (Card/Net Banking)</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleveryStaus
