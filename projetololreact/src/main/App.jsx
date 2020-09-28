import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/header'
import Nav from '../components/nav'
import Routes from './Routes'
import Footer from '../components/footer'

export default props =>
<BrowserRouter>
    <div className="app">
        <Header />
        <Nav />
        <Routes />
        <Footer />
    </div>
</BrowserRouter>