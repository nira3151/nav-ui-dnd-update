import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from '../container/Navbar'

export default class BaseNavigator extends Component {
    render() {
        return (
            <Router>
            <div>
                <Switch>
                    <Route path='/' component={Nav} exact />
                </Switch> 
            </div>
            </Router>
        )
    }
}  