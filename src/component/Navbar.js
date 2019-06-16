import React, { Component } from 'react'

export default class Navbar extends Component {

    render() {
        return (
            <nav>
                <div className="container">
                    <div className="nav-grid">
                        <div className="navbar-brand">
                            <h1>WEBSITE</h1>
                        </div>
                        <ul className="navbar-manu">
                            <li>HOME</li>
                            <li>JOB</li>
                            <li>ADVICE</li>
                            <li>ABOUT</li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
