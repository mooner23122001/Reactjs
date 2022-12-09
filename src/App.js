import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from './ShowWeb';
import Table from './my-web/Table'
import Test from './my-web/Test';
import TableValidate from './my-web/Table/TableValidate';

function App() {
  const arr = ["Home", "Table", "Test","TableValidate"]
  return (
    <div>
      <nav>
        <ul className='d-flex'>
          {/* {arr.map((value, index) => {
            return (
              <li className='list-group-item'>
                <Link to="/">{value}</Link>
              </li>
            );
          })} */}
          <li className='list-group-item px-3'>
            <Link to="/">Home</Link>
          </li>
          <li className='list-group-item px-3'>
            <Link to="/table">Table</Link>
          </li>
          <li className='list-group-item px-3'>
            <Link to="/test">Test</Link>
          </li>
          <li className='list-group-item px-3'>
            <Link to="/TableValidate">Table Validate</Link>
          </li>
        </ul>

      </nav>
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path='/table' element={< Table />} />
        <Route path='/test' element={<Test />} />
        <Route path='/TableValidate' element={<TableValidate/>} />
      </Routes>
    </div>
  );
}

export default App;
