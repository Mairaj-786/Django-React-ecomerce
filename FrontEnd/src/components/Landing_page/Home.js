import React from 'react'
import ImgSlider from './ImgSlider'
import LeftCategory from './LeftCategory'
import '../Style/home.css'
import Products from './Products'
import DeleveryStaus from './DeleveryStaus'
import Footer from '../Footer/Footer'
const Home = (props) => {
    return (
        <div className="home">
            <div className="cate_slider">
                <LeftCategory state={props.state} setState={props.setState} />
                <ImgSlider />
            </div>
            <div className="products">
                <Products />
            </div>
            <div className="delevery_staus">
                <DeleveryStaus />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Home
