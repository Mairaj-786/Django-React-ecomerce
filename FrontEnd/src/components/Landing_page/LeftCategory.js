import React from 'react'
import '../Style/left_cate.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const LeftCategory = (props) => {
    return (
        <div className={`left_category ${props.state ? 'show' : ''}`}>
            <ul>
                <li onClick={() => !props.setState(false)}>
                    Mens
                    <span><ArrowForwardIosIcon style={{ fontSize: '13px' }} /></span>
                </li>
                <li onClick={() => !props.setState(false)}>Wo
                mens
                    <span><ArrowForwardIosIcon style={{ fontSize: '13px' }} /></span>
                </li>
                <li onClick={() => !props.setState(false)}>
                    Kids
                    <span><ArrowForwardIosIcon style={{ fontSize: '13px' }} /></span>
                </li>
            </ul>
        </div >
    )
}

export default LeftCategory
