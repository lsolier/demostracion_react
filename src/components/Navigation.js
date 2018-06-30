import React, {Component} from 'react';

import logo from '../logo.svg';
import '../App.css';

class Navigation extends Component{
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">                
                <a className="navbar-brand" href="">
                    <img src={logo} className="App-logo" alt="logo" />
                    ReactJS
                </a>              
                <a className="navbar-brand" href="">
                    { this.props.titulo }
                    <span className="badge badge-pill badge-light ml-2">
                        {this.props.ntareas}
                    </span>
                </a>
            </nav>
        )
    }
}

export default Navigation;
