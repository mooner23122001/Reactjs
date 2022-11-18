import React from 'react';
import './Section.css';

const Section = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-xs-12">
                        <img src={"https://builder.pixfort.com/item/megapack/images/ebook/book-mockup.png"} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-5 col-xs-12 pt-5">
                        <h2 className="text-white big-text">A Different Kind Of Company. A Different Kind Of Book.</h2>
                        <p className="text-warning big-text">From logo design to video animation, web development to website
                            copy; expert designers, developers and digital talent are ready to complete your projects.</p>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control my-4 py-4" placeholder="Enter Your Full Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control my-4 py-4" placeholder="Enter Your Email Address" />
                            </div>
                            <button type="submit" className="btn btn-warning btn-block text-white my-3"><strong>Download eBook
                                Today</strong></button>
                        </form>
                        <p className="text-warning">*Don’t Worry! We hate SPAM as much as you do!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;