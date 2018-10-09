import React from 'react';

const ProductDetails = (props) => {
    return (
        <div className="card">
            <div className="front">
                <img src="/juice.jpg" alt="Avatar" className="card-image" />
                <div className="container">
                <h3>{props.card.title}</h3>
                <h3><span className="price"> ${props.card.price}</span></h3> 
                <p>{props.card.description}</p>
                </div>
            </div>
        </div>
    )
}
 
export default ProductDetails;