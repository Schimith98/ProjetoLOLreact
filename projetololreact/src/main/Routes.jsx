import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import AllChampions from '../components/allChampions'
import FreeWeek from '../components/freeWeek'

export default props =>
    <Switch>
        <Route exact path="/" component={AllChampions}/>
        <Route exact path="/freeweek" component={FreeWeek}/>
        <Redirect from="*" to="/" />
    </Switch>