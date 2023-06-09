import React, { useState } from 'react';
import './Order.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../../Utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    console.log(savedCart);
    const [cart, setCart] = useState(savedCart);
    
   const handleRemoveFromCart = (id) =>{
      const remaining = cart.filter(product => product.id !== id);
      setCart(remaining);
      removeFromDb(id)
   }
    return (
        <div className='shop-container'>
            <div className='review-container'>
              {
                cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
              }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;