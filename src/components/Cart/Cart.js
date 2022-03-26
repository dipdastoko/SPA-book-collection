import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = props => {
    let i = 0;
    const { cart } = props;
    let total = 0;
    for (const book of cart) {
        total = total + book.price;
    }
    return (
        <div>
            <div className='cart-container'>
                <h3><FontAwesomeIcon icon={faBookOpen} /> Books Added: {cart.length}</h3>
                <h3>Total Cost: ${total}</h3>
            </div>
            <div className='addedBooksName'>
                <h2>Added Books Name</h2>
                {
                    cart.map(book => <p key={book.name}><b>{++i}. {book.name}</b></p>)
                }
            </div>
        </div>
    );
};

export default Cart;