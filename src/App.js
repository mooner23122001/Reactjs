import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './ShowWeb';
import Table from './my-web/Table'
import Test from './my-web/Test';

function App() {
  const arr = ["Home", "Table", "Test"]
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
          <li className='list-group-item'>
            <Link to="/">Home</Link>
          </li>
          <li className='list-group-item'>
            <Link to="/table">Table</Link>
          </li>
          <li className='list-group-item'>
            <Link to="/test">Test</Link>
          </li>
        </ul>

      </nav>
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path='/table' element={< Table />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
