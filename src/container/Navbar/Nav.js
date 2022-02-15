import React, { Component } from 'react'
import Ui1 from '../Ui1'
export default class Navigation extends Component {
    render() {
        return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">   
                        <a className="nav-link" >Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Pricing</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div>
            <Ui1/>
        </div>
        </div>
        )
    }
}
