import React from 'react'
import '../Style/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className='row'>
                    <div className="col-md-3 col-6">
                        <div className="footer_wrapper">
                            <strong>Useful Links</strong>
                            <p>Privacy Policy</p>
                            <p>Term of use</p>
                            <p>Return Policy</p>
                            <p>Discount coupens</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="footer_wrapper">
                            <strong>Company</strong>
                            <p>About us</p>
                            <p>Contact us </p>
                            <p>Careers</p>
                            <p>Affiliate</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="footer_wrapper">
                            <strong>Follow Us On</strong>
                            <p>Facebook</p>
                            <p>Linked in</p>
                            <p>Youtube</p>
                            <p>Twitter</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="footer_wrapper">
                            <strong>Download App</strong>
                            <p>Privacy Policy</p>
                            <p>Term of use</p>
                            <p>Return Policy</p>
                            <p>Discount coupens</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
