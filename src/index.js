import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Books from './component/Books';
import Book from './component/Book';
import About from './component/About';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <Routes>
        <Route path="/" element={<App />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/about" element={<About />} />

          <Route path="/books" element={<Books />} >
            <Route
              index
              element={
                <main>
                  <h3>لطفا کتاب مورد نظر خود را انتخاب کنید</h3>
                </main>

              } />
            <Route path=":bookId" element={<Book />} />
          </Route>
          {/* <Route path="/book/:bookId" element={<Book />} /> */}

          <Route path="*" element={
            <main>
              <h3>گشتم نبود نگرد نیست.</h3>
            </main>
          } />

        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
