import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
   
    const {name,img, price, seller, ratings}= props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
          <img src={img} alt="" />
          <h6 className='product-name'>{name}</h6> 
          <p className='product-price'>Price:$ {price}</p>
          <p className='product-manu'>Manufacturar :{seller}</p>
          <p>Ratings: {ratings} start</p>
          <button onClick={()=> handleAddToCart(props.product)} className='btn-cart'>Add To Cart<FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;