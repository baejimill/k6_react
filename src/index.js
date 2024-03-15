import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //컴포넌트는 앞글자가 대문자 내가만든 태그
// import reportWebVitals from './reportWebVitals';
//리액트는 가상돔을 만듬
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />   //사용자 정의 태그
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
