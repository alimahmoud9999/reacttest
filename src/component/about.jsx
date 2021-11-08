import React, { Component } from 'react'
import { Link ,NavLink} from 'react-router-dom'
import { Redirect, Route, Switch } from "react-router-dom";

import OurCompany from './ourcompany'
import OurTeam from './ourteam'

export class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <h1> About </h1>
                    </div>
                    <div className="col-lg-2">
                    <ul>
                    <li>
                        <NavLink className="nav-link" to="/about/team">Our Team</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/about/company">Our company</NavLink>
                    </li>
                </ul>
                    </div>
                    <div className="col-lg-10">
                            <Route path="/about/team" component={OurTeam} />
                            <Route path="/about/company" component={OurCompany} /> 

                        {/* <Route path="/about/team" Component={OurTeam}/>*/}
                    </div> 
                </div>
                
            </div>
        )
    }
}

export default About
