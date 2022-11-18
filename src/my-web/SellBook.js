import React from 'react';
import './SellBook.css';

const SellBook = () => {
    return (
        <div className="sell-book">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 text-center">
                        <h1>Products With Affordable Prices!</h1>
                    </div>
                    <div className="col-md-12 col-xs-12 big-text-20 text-center">
                        <p className="paragraph-top text-secondary">From logo design to website designers and develope are ready
                            to complete perfect your custom jobs.</p>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="bottom-sell-book text-center rounded bg-light">
                            <img src={"	https://builder.pixfort.com/item/megapack/images/ebook/book-mockup-table-1.png"}
                                className="img-fluid" alt="" />
                            <h4>eBook Orginal</h4>
                            <h5><strong>$19.99</strong></h5>
                            <p className="big-text text-secondary">It is a long established fact that a reader will be
                                distracted by the read able content of a page</p>
                            <button type="button" className="btn text-warning border border-warning"><strong>Purchase
                                now</strong></button>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="bottom-sell-book text-center rounded">
                            <img src={"	https://builder.pixfort.com/item/megapack/images/ebook/book-mockup-table-2.png"}
                                className="img-fluid" alt="" />
                            <h4>eBook Premium</h4>
                            <h5><strong>$29.99</strong></h5>
                            <p className="big-text text-secondary">It is a long established fact that a reader will be
                                distracted by the read able content of a page</p>
                            <button type="button" className="btn text-success border border-success"><strong>Purchase
                                now</strong></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellBook;