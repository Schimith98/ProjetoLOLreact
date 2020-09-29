import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import Header from '../components/header'
import Nav from '../components/nav'
import Home from '../components/home'
import Footer from '../components/footer'

export default props =>
<BrowserRouter>
    <div className="app">
        <Header />
        <Nav />
        <Home />
        <Footer />
    </div>
</BrowserRouter>