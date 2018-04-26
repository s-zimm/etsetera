import React from 'react';

const SingleCategory = ({ title, description }) => {
    return (
        <div className="single-category">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default SingleCategory;