import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

export default props =>
    <nav className="nav">
        <ul>
            <li><Link to= "/">Todos os campeoes</Link></li>
            <li><Link to="/freeweek">Free Week</Link></li>
        </ul>
    </nav>