import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = props => {
    let total = 0;
    for (const book of props.cart) {
        total = total + book.price;
    }
    return (
        <div className='cart'>
            <h3><FontAwesomeIcon icon={faBookOpen} /> Books Added: {props.cart.length}</h3>
            <h3>Total Cost: {total}</h3>
        </div>
    );
};

export default Cart;