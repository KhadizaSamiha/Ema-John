import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart}) => {
    let total = 0;
    let Shipping = 0;
    for(const product of cart){
       total = total + product.price;
       Shipping = Shipping + product.shipping;
    }
    const tax = total*7/100;
    const grandTotal = total + Shipping + tax; 
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items:{cart.length}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: {Shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
            <button>
                Clear Cart
                <FontAwesomeIcon  icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default Cart;