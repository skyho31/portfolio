import React, { Component } from 'react';
import '../styles/index.scss';

import Work from './Work';
import About from './About';
import Contact from './Contact';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const pathName = {
  "" : 'WORKS',
  "about" : 'ABOUT',
  "contact" : 'CONTACT'
}

class App extends Component {  
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App" ref="main" onScroll={this.scrollTop}>
          <Header />
          <Switch>
            <Route exact path="/" component={Work}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      isOpen: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closedMenu = this.closedMenu.bind(this);
  }

  toggleMenu(e) {
    e.preventDefault();
    if(this.state.isOpen){
      this.closedMenu(e);
    } else {
      this.setState({
        isOpen: true
      });
    }
  }

  closedMenu(e) {
    e.preventDefault();
    this.setState({
      isOpen: false
    })
  }

  render() {
    const outscreenClasses = ['outScreen'];
    const menuBoxClasses = ['menuBox'];
    if(this.state.isOpen) {
      outscreenClasses.push('show');
      menuBoxClasses.push('open');
    }

    return (
      <header>
        <section className="topbar">
          <span className="pageTitle">{pathName[window.location.pathname.split('/').slice(-1)
]}</span>
          <div className={menuBoxClasses.join(' ')} onClick={this.toggleMenu}>
            <span id="customButton"></span>
          </div>
        </section>
        <section className={outscreenClasses.join(' ')} onClick={this.closedMenu}>
          <ul className="listBox">
            <li><Link to="/">WORKS</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </section>
      </header>
    )
  }
}

export default App;
