import './App.css';

import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <h3>کتابخانه من</h3>
      {/* 
      <nav className='nav justify-content-center'>

        <Link to="/books">کتاب ها</Link> {"  "}
        <Link to="/about">درباره ما</Link>

      </nav> */}
      <nav className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/books">کتاب ها</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">درباره ما</Link>
        </li>
      </nav>
      <hr />
      <Outlet />

    </div>
  );
}

export default App;
