import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
class OrderApp extends Component {
    render () {
        return (
            <div>
                <ul role="nav">
                    <li><Link to="/user">About</Link></li>
                    <li><Link to="/login">Repos</Link></li>
                </ul>
            </div>
        );
    }
}

export default OrderApp;