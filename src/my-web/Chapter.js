import React from "react";
import ChapterList from "./ChapterList";
import "./Chapter.css";

const Chapter = () => {
    const arr = ["1. Chapter One", "2. Chapter Two", "3. Chapter Three"];
    return (
        <div className="chapter py-5">
            <div className="container px-5 ">
                <div className="row">
                    {arr.map((value, index) => {
                        return (
                            <ChapterList
                                key={index}
                                title={value}
                                sectionFirst="a. First Section Goes Here."
                                sectionSecond="b. Second Section Goes Here."
                                sectionThird="c. Third Section Goes Here."
                            ></ChapterList>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Chapter;
