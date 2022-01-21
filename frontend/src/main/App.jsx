import React from "react";

import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Home from '../components/home';
import Footer from '../components/template/Footer';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default props =>
  <div className="app">
    <Logo />
    <Nav />
    <Home />
    <Footer />
  </div>

//https://www.flaticon.com/br/icones-animados-mas-baixados