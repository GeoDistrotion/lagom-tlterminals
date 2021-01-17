import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/header/header';
import HomePage from './pages/home/page-home';
import Footer from './components/footer/footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <HomePage />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
