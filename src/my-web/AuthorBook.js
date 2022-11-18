import React from 'react';
import './AuthorBook.css';

const AuthorBook = () => {
    return (
        <div className="author-book text-center">
            <div className="container">
                <img src={"https://builder.pixfort.com/item/megapack/images/startup/client-2.jpg"} alt=""
                    className="img-fluid rounded-circle" />
                <h3 className="text-dark">Sara .H Smith</h3>
                <h6 className="text-warning"><strong>AUTHOR OF EBOOK</strong></h6>
                <p className="text-secondary big-text text-secondary">It is a long established fact that a reader will be
                    distracted by the read able content of a page when looking at its layout. The point of using Lorem Ipsum
                    is that it has a more or less normal distribution of letters, content here, making it look like read
                    able English.</p>
                <div className="icon-contact text-black-50">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-instagram"></i>
                </div>
            </div>
        </div>
    );
};

export default AuthorBook;