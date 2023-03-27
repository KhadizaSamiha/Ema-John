import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,img, price, seller, ratings}= props.product;
    return (
        <div className='product'>
          <img src={img} alt="" />
          <h6 className='product-name'>{name}</h6> 
          <p className='product-price'>Price:$ {price}</p>
          <p className='product-manu'>Manufacturar :{seller}</p>
          <p>Ratings: {ratings} start</p>
          <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;