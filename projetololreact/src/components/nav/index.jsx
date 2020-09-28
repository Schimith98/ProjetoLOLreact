import React from 'react'

import { Link } from 'react-router-dom'

export default props =>
    <aside className="nav">
        <ul>
            <Link to= "/">Todos os campeoes</Link>
            <Link to="/freeweek">Free Week</Link>
        </ul>
    </aside>