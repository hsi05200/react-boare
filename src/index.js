import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header';
import Body from './Body';
import Footer from "./Footer";

ReactDOM.render(
  <div>
    <Header />
    <Body />
    <Footer />
  </div>,
  document.querySelector('#container')
);