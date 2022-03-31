import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom';



const Header= ({currentUser})=>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            home
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;