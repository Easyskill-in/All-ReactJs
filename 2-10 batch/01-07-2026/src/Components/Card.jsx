import React from 'react';

import IMG from '../assets/Images/A.jpg';

const Card = ({ title, image, desc, id }) => {
    return (
        <div className="card">
            <img src={image || IMG} alt="Card Image" className="card-img" />
            <h1 className="card-title">{title || "Card Title"}</h1>
            <p className="card-text">
                {desc || " Card content goes here."}
            </p>
        </div>
    );
};

export default Card;