import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const cart = useLoaderData();
    console.log(cart.push);
    return (
        <div className='shop-container'>
            <div>
              <h2>This is order : {cart.length}</h2>
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;