import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Home, Login, NotFound, Register, Dashboard } from '../pages'

export default function Routers() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Router>
    )
}
