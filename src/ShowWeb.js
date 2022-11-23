import React from 'react';
import Header from './my-web/Header';
import Section from './my-web/Section';
import EBook_introduce from './my-web/EBook_introduce';
import NewBook from './my-web/NewBook';
import Chapter from './my-web/Chapter';
import GetBook from './my-web/GetBook';
import SellBook from './my-web/SellBook';
import MadeEbook from './my-web/MadeEbook';
import AuthorBook from './my-web/AuthorBook';
import Answer_Question from './my-web/Answer_Question';
import Footer from './my-web/Footer';

const ShowWeb = () => {
    return (
        <div>
            <Header></Header>
            <Section></Section>
            <EBook_introduce></EBook_introduce>
            <NewBook></NewBook>
            <Chapter></Chapter>
            <GetBook></GetBook>
            <SellBook></SellBook>
            <MadeEbook></MadeEbook>
            <AuthorBook></AuthorBook>
            <Answer_Question></Answer_Question>
            <Footer></Footer>
        </div>
    );
};

export default ShowWeb;