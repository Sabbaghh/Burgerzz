import React from 'react';
import LogoPNG from '../../assets/Img/burger.png'
import './Logo.css'
const Logo = ({ height }) => {
    return (
        <div className='Logo' style={{ height }}>
            <img src={LogoPNG} alt="LOGO" />
        </div>
    )
}

export default Logo;