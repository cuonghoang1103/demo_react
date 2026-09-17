import React from 'react';
import ReactDOM from 'react-dom/client';
// Exercise 5 — hai dòng nạp Bootstrap vào app React.
// CSS là thứ bắt buộc. Bundle JS kèm Popper, cần cho dropdown/tooltip/modal
// viết bằng class Bootstrap thuần; component React-Bootstrap (bài 10) tự lo
// phần này nên không phụ thuộc vào nó.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
