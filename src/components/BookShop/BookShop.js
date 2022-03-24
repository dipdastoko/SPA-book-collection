import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './BookShop.css'

const BookShop = () => {
    const [books, setBooks] = useState([]);;
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);
    return (
        <div className='book-shop'>
            <div className='book-container'>
                {
                    books.map(book => <Books book={book}></Books>)
                }
            </div>

            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default BookShop;