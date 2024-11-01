import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <nav className='nav'>

            <NavLink to='/Home' >Home</NavLink>
            <NavLink to='/About' >About</NavLink>
            <NavLink to='/ContactUs' >Contact Us</NavLink>

        </nav>
    )
}

export default Header
