import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/#">Navbar</a>
                    <span className="badge bg-primary">{this.props.proCount}</span>
                </div>
                
            </nav>

        )
    }
}

export default Navbar
