import React from 'react';
import './Ebook_introduce.css';


const EBook_introduce = () => {
    return (
        <div className="ebook-introduce">
            <div className="container">
                <div className="row text-center title-ebook-introduce text-dark">
                    <h1>The New <strong>eBook Landing Page</strong> is Now Available on Themeforest</h1>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xs-12 text-secondary big-text">
                        <p><strong>Lorem Ipsum</strong> is simply dummy textof the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not only
                            five.</p>
                    </div>
                    <div className="col-md-6 col-xs-12 text-secondary big-text">
                        <p><strong>It is a long established</strong> fact that it will be distracted by the readable content
                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                            making it look like English.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EBook_introduce;