import React from 'react';
import './Book.css'

const Books = props => {
    const { name, authorName, price, img, genre, language } = props.book;
    return (
        <div className='book'>
            <img src={img} alt="" />
            <div className='text'>
                <h3><i>{name}</i></h3>
                <p><span>Author:</span> {authorName}</p>
                <p><span>Genre:</span> {genre}</p>
                <p><span>Language:</span> {language}</p>
                <p><span>Price:</span> ${price}</p>

            </div>
        </div>
    );
};

export default Books;