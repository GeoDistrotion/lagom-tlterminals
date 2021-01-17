import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/header/header';
import HomePage from './pages/home/page-home';
import Footer from './components/footer/footer';
import MainMenu from './components/mainmenu/main-menu';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MainMenu />
    <HomePage />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
