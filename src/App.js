import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
// import TransitionGroup from "react-transition-group/TransitionGroup"
import './App.css'
import Home from './Home'
import Work from './Work'
import About from './About'
import Contact from './Contact'

// const firstChild = props => {
//   const childrenArray = React.Children.toArray(props.children)
//   return childrenArray[0] || null
// }

class App extends Component {

  render() {
    return (
      <div className="App">

        <nav>
          <Link to='/' className="home_link"><b>Home</b></Link>
          <Link to='/contact' className="contact_link"><b>Contact</b></Link>
          <Link to='/work' className="work_link"><b>Work</b></Link>
          <Link to='/about' className="about_link"><b>About</b></Link>
        </nav>

        <Route exact path="/" component={Home} />
        {/* <Route
          exact
          path="/"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <Home {...rest} />}
            </TransitionGroup>
        )}/> */}

        <Route exact path="/work" component={Work} />
        {/* <Route
         path="/work"
         children={({ match, ...rest }) => (
           <TransitionGroup component={firstChild}>
             {match && <Work {...rest} />}
           </TransitionGroup>
        )}/> */}

        <Route exact path="/about" component={About} />
        {/* <Route
           path="/about"
           children={({ match, ...rest }) => (
             <TransitionGroup component={firstChild}>
               {match && <About {...rest} />}
             </TransitionGroup>
        )}/> */}

        <Route exact path="/contact" component={Contact} />
        {/* <Route
           path="/contact"
           children={({ match, ...rest }) => (
             <TransitionGroup component={firstChild}>
               {match && <Contact {...rest} />}
             </TransitionGroup>
        )}/> */}

      </div>
    );
  }
}

export default App;
