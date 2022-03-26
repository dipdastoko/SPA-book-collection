import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './BookShop.css'

const BookShop = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);
    const handleButton = cartBook => {
        // console.log(cartBook);
        const newCart = [...cart, cartBook];
        setCart(newCart);
    }
    return (
        <div className='book-shop'>
            <div className='book-container'>
                {
                    books.map(book => <Books
                        key={book.name}
                        book={book}
                        handleButton={handleButton}
                    ></Books>)
                }
            </div>

            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default BookShop;