import React from 'react';
import LogoPNG from '../../assets/Img/burger.png';
import { Link } from 'react-router-dom'
import './Logo.css'
const Logo = ({ height }) => {
    return (
        <div className='Logo' style={{ height }}>
            <Link to='/'>
                <img src={LogoPNG} alt="LOGO" />
            </Link>
        </div>
    )
}

export default Logo;