import React from 'react';
import { NavLink } from "react-router-dom";

import '../../style/main.scss';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='links'>
                <div className='home-link'>
                    <NavLink className={'navlink'} exact to="/">Home</NavLink>
                </div>
                <div className='blog-link'>
                    <NavLink className={'navlink'} to="/blog">Blog</NavLink>
                </div>
            </div>
        </div>
    )
}
