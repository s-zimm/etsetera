import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({ title, description }) => {
    return (
        <Link to={`/categories/${title}`} className="single-category">
            <h2>{title}</h2>
            <p>{description}</p>
        </Link>
    )
}

export default SingleCategory;