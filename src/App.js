import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { spring, AnimatedSwitch } from 'react-router-transition'
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

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  }
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 100,
    damping: 30,
  })
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(1),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

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

        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="route-wrapper"
        >

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
               {match && <Work {...rest} />}9
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
        </AnimatedSwitch>

      </div>
    );
  }
}

export default App;
