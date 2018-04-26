import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
        </div>
    )
}

export default Navbar;