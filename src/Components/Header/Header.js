import React from 'react';
import { NavLink } from 'react-router-dom'

import './Header.scss';
function Header(props) {
    return (<div className="header-container">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/signup">SignUp</NavLink>
                <NavLink to="/signin">SignIn</NavLink>
            </div>
    );
}

export default Header;