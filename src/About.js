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
          speed={25}
          >

          <Typing.Delay ms={1000} />

          <p
            style={{fontSize: '75%'}}
            >Front end developer living in Melbourne. Recently graduated from the Web Development Immersive course at General Assembly. Coding for the past 6 years. Studied Computer Science and Design for Communication. Designed and built responsive full-stack web applications using common design standards. Used SQL databases to safely model and store data. Developed web applications using modern Ruby and JavaScript frameworks such as Rails and React. Integrated third-party APIs in multiple projects. Deployed functional applications to the web using cloud-based hosting. Worked in team environments using Agile project management methodology and collaborative version control using Git.<br/><br/>I Love any opportunity to turn creative design work in to functional web applications.</p>

          <p><b>Say hello. :)</b></p>
        </Typing>

      </div>
    )
  }
}

// const About = AnimatedWrapper(AboutComponent)
export default About;
