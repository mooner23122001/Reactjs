import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row py-3">
                    <div className="col-md-3 col-xs-6 text-center">
                        <img src={"https://builder.pixfort.com/item/megapack/images/main/logo-md.png"} />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-black-50" href=""><strong>FEATURES</strong></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-black-50" href=""><strong>DROPDOWN</strong></a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item text-secondary" href="">Menu Builder</a></li>
                                    <li><a className="dropdown-item text-secondary" href="">Custom Link</a></li>
                                    <li><a className="dropdown-item text-secondary" href="">Integrations</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black-50" href=""><strong>CONTACT</strong></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-xs-6 text-center">
                        <button type="button" className="btn text-warning border border-warning"><strong>Purchase
                            now</strong></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;