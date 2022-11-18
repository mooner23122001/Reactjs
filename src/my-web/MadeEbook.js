import React from 'react';
import './MadeEbook.css';

const MadeEbook = () => {
    return (
        <div className="made-ebook bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12 embed-responsive embed-responsive-16by9 vid-made-book">
                        <iframe width="350" height="250" src="https://www.youtube.com/embed/kQ1SkbFoCFk"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <h1 className="text-dark">Watch How We Made Our eBook!</h1>
                        <p className="text-secondary">From logo design to video animation, web development to website copy,
                            expert designers developers and digital talent are ready to complete your projects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MadeEbook;