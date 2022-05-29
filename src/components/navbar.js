import React from 'react'
import { NavLink } from "react-router-dom"

// import '../style/navbar.scss';

export default function Navbar() {
    return (
        <div className='navbar'>
            
            <div className='links'>
                <div className='link'>
                    <NavLink exact to="/">Home</NavLink>
                </div>
                <div className='link'>
                    <NavLink to="/blog">Blog</NavLink>
                </div>
            </div>
        </div>
    )
}
