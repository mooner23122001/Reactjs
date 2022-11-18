import React from 'react';
import './Chapter.css';

const Chapter = (props) => {
    return (
        <div className="chapter py-5">
            <div className="container px-5 ">
                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <h4 className="text-dark">{props.title}</h4>
                        <ul className='text-secondary'>
                            <li>{props.sectionFirst}</li>
                            <li>{props.sectionSecond}</li>
                            <li>{props.sectionThird}</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <h4 className="text-dark">1. Chapter Two</h4>
                        <ul className='text-secondary'>
                            <li>{props.sectionFirst}</li>
                            <li>{props.sectionSecond}</li>
                            <li>{props.sectionThird}</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <h4 className="text-dark">1. Chapter Three</h4>
                        <ul className='text-secondary'>
                            <li>{props.sectionFirst}</li>
                            <li>{props.sectionSecond}</li>
                            <li>{props.sectionThird}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    );
};


export default Chapter;