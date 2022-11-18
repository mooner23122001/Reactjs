import React from 'react';
import './GetBook.css';

const GetBook = () => {
    return (
        <div className="get-book bg-light py-5">
            <div className="container text-center">
                <img src={"https://builder.pixfort.com/item/megapack/images/ebook/image-book.png"} className="img-fluid" alt="" />
                <h1 className="text-dark py-3">Get a Book to Get a Friend!</h1>
                <p className="big-text-20 text-secondary">It is a long established fact that a reader will be distracted by the
                    read able content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more or less normal distribution of letters, content here, making it look like read able English.</p>
                <button type="submit" className="button-get-book btn text-warning border-warning my-3"><strong>Download
                    eBook</strong></button>
            </div>
        </div>
    );
};

export default GetBook;