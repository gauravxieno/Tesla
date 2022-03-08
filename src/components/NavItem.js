import React from 'react'
import { Link } from "react-router-dom"

const NavItem = ({ path, label }) => {
    return(
        <Link to={path}>
            <button>{label}</button>
        </Link>
    );
};

export default NavItem;