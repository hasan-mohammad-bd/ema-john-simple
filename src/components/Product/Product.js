import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product);
    // const {handleAddToCard} = props;
    const {name,img,seller, price, ratings} = props.product;
    //in react, the data cant be send  to upper level. so the event handler function are used as props as below used in button.

    return (
        <div className='product'>
            <div className='padding'><img src={img} alt="" /></div>
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            {/* event handler function can be send to lower child/ */}
            <button onClick={() => props.handleAddToCard(props.product)} className='btn-cart'>
                <h4>Add to the card</h4>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;