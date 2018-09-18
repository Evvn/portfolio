import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Work from './Work'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="App">

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/work'>Work</Link>
          <Link to='/contact'>Contact</Link>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />

      </div>
    );
  }
}

export default App;
