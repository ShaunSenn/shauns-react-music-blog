import React from 'react';
import { NavLink } from "react-router-dom";

import '../style/main.scss';

export default function Navbar() {
    return (
        <div className='navbar'>
            
            <div className='links'>

                {/* text-decoration: none for links below */}
                <div className='link'>
                    <NavLink className={'navlink'} exact to="/">Home</NavLink>
                </div>
                <div className='link'>
                    <NavLink className={'navlink'} to="/blog">Blog</NavLink>
                </div>

            </div>

        </div>
    )
}
