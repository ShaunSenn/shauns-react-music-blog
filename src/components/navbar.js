import React from 'react'
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <div className='nav-wrapper'>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </div>
    )
}
