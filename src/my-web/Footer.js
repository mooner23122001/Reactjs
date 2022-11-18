import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <img src={"https://builder.pixfort.com/item/megapack/images/main/logo-big.png"} alt="" />
                        <p className="text-secondary"><strong>MEGAPACK</strong> provides you with a full user manage
                            functionality that results revenue.
                        </p>
                        <p className='pt-3 text-secondary'>Copyright © 2017 PixFort All Rights Reserved</p>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <h4 className="text-dark">Get eBook Today</h4>
                        <p className="text-secondary">We provides you with a full user manage functionality that results in
                            faster revenue, user and the ability.</p>
                        <button type="button" className="btn text-warning border border-warning"><strong>Purchase
                            now</strong></button>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <h4>Stay in Touch</h4>
                        <p>It is a long established fact that a reader will be distracted by the read able content of a page
                            when looking at its layout.</p>
                        <div className="icon-contact text-black-50">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;