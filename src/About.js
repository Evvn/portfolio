import React, { Component } from 'react';
import Typing from 'react-typing-animation'
// import AnimatedWrapper from "./AnimatedWrapper"

// class AboutComponent extends Component {
//   render() {
//     return (
//       <div className="page">
//         <h1>About.</h1>
//
//         <p>I'm a front end developer living in Melbourne. I recently graduated from the Web Development Immersive course at General Assembly, but I've been coding for the past 6 years. I studied Design for Communication and Computer Science, and have experience in both programming and development. I love any opportunity to turn creative design work in to functional web applications.</p>
//
//         <p>Say hello :)</p>
//       </div>
//     )
//   }
// }

class About extends Component {
  render() {
    return (
      <div className="page about">

        <Typing
          speed={150}
          >
          <h1>About.</h1>
        </Typing>

        <Typing
          speed={35}
          >

          <Typing.Delay ms={1000} />

          <p>I'm a front end developer living in Melbourne. I recently graduated from the Web Development Immersive course at General Assembly, but I've been coding for the past 6 years. I studied Design for Communication and Computer Science, and have experience in design, development, and programming. I love any opportunity to turn creative design work in to functional web applications.</p>

          <p>Say hell<span style={{fontSize: '80%'}}>☻</span></p>
        </Typing>

      </div>
    )
  }
}

// const About = AnimatedWrapper(AboutComponent)
export default About;
