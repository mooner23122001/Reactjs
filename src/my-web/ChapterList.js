import React from 'react';

const ChapterList = (props) => {
    return (
        <div className="col-md-4 col-xs-12">
            <h4 className="text-dark">{props.title}</h4>
            <ul className="text-secondary">
                <li>{props.sectionFirst}</li>
                <li>{props.sectionSecond}</li>
                <li>{props.sectionThird}</li>
            </ul>
        </div>
    );
}

export default ChapterList;
