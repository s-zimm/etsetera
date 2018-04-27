import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <h1>Etsetera</h1>
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/cart">Cart</Link>
        </div>
    )
}

export default Navbar;