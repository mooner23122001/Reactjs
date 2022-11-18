import React from 'react';
import './NewBook.css';

const NewBook = () => {
    return (
        <div className="newbook">
            <div className="container text-center">
                <img src={"https://builder.pixfort.com/item/megapack/images/ebook/book-mockup-inner.png"} className="img-fluid" alt="" />
                <h1 className="text-dark">Start With a Quick View on our Book</h1>
                <p className="big-text-20 text-secondary">From logo design to website designers and develope are ready to
                    complete perfect your custom jobs.</p>
            </div>
        </div>
    );
};

export default NewBook;