import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from 'react-router-dom';
import Portfolio from '../components/portfolio'
import About from '../components/about'
import Contact from '../components/contact'
import Navigation from '../components/navigation'
import Resume from '../components/resume'

class Header extends Component {
    render() {
        return(
            <HashRouter>
                <div className="nav">
                    <Navigation/>
                </div>
            <div className="routes">
                <Route exact path="/" render={() => (<Redirect to="/about"/>)}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/resume" component={Resume}/>
            </div>
            </HashRouter>
        )
    }
}

export default Header;