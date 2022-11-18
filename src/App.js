import './App.css';
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

function App() {
  return (
    <div>
      <p>Learn React</p>
      <Header></Header>
      <Section></Section>
      <EBook_introduce></EBook_introduce>
      <NewBook></NewBook>
      <Chapter
        title ="1. Chapter one"
        sectionFirst="a. First Section Goes Here."
        sectionSecond="b. Second Section Goes Here."
        sectionThird="c. Third Section Goes Here."
      ></Chapter>
      <GetBook></GetBook>
      <SellBook></SellBook>
      <MadeEbook></MadeEbook>
      <AuthorBook></AuthorBook>
      <Answer_Question></Answer_Question>
      <Footer></Footer>
    </div>
  );
}

export default App;
