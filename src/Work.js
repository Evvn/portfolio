import React, { Component } from 'react';
import Typing from 'react-typing-animation'
// import AnimatedWrapper from "./AnimatedWrapper"

// class WorkComponent extends Component {
//   render() {
//     return (
//       <div className="page">
//         <h2>Work.</h2>
//
//         <div className="work">
//           <div className="proj_desc">
//             <h3>Talk About Something.</h3>
//             <p>An imageboard style website. Built with <b>Ruby on Rails</b> using <b>Sinatra</b>, <b>Puma</b>, and run on a <b>Postgresql</b> database.</p>
//           </div>
//           <div className="proj_img">
//             <a className="img_a" href="https://talk-about-something.herokuapp.com/login"><img src="/talkaboutsomething.png" alt=""/></a>
//           </div>
//         </div>
//
//         <div className="work">
//           <div className="proj_desc">
//             <h3>Breakout.</h3>
//             <p>A simple Breakout game written in <b>JavaScript</b> and rendered with the <b>HTML5 canvas</b> element.</p>
//           </div>
//           <div className="proj_img">
//             <a className="img_a" href="https://evvn.github.io/breakout/"><img src="/breakout.png" alt=""/></a>
//           </div>
//         </div>
//
//         <div className="work">
//           <div className="proj_desc">
//             <h3>Ikigai.</h3>
//             <p>A platform to match mentors and mentees. Back end built with <b>Ruby on Rails</b> using <b>Postgresql</b>. Front end built with <b>JS</b> and using <b>CSS Grid</b>.</p>
//           </div>
//           <div className="proj_img">
//             <a className="img_a" href="http://dutch-uncle.herokuapp.com/"><img src="/ikigai.png" alt=""/></a>
//           </div>
//         </div>
//
//       </div>
//     )
//   }
// }

class Work extends Component {
  render() {
    return (
      <div className="page">

        <Typing
          speed={150}
        >
          <h2>Work.</h2>
        </Typing>

        <div className="work">
          <div className="proj_desc">
            <h3>Talk About Something.</h3>
            <p>An imageboard style website. Built with <b>Ruby on Rails</b> using <b>Sinatra</b>, <b>Puma</b>, and run on a <b>Postgresql</b> database.</p>
          </div>
          <div className="proj_img">
            <a className="img_a" href="https://talk-about-something.herokuapp.com/login"><img src="/talkaboutsomething.png" alt=""/></a>
          </div>
        </div>

        <div className="work">
          <div className="proj_desc">
            <h3>This.</h3>
            <p>A portfolio website built with <b>React</b>. Contact form handled by <b>EmailJS</b>. Page transitions created with <b>React Router</b>.</p>
          </div>
          <div className="proj_img">
            <a className="img_a" href="http://evvn.herokuapp.com/"><img src="/portfolio.png" alt=""/></a>
          </div>
        </div>

        <div className="work">
          <div className="proj_desc">
            <h3>Breakout.</h3>
            <p>A Breakout arcade game written in <b>JavaScript</b> and rendered with the <b>HTML5 canvas</b> element.</p>
          </div>
          <div className="proj_img">
            <a className="img_a" href="https://evvn.github.io/breakout/"><img src="/breakout.png" alt=""/></a>
          </div>
        </div>

        <div className="work">
          <div className="proj_desc">
            <h3>Ikigai.</h3>
            <p>A platform to match mentors and mentees. Back end built with <b>Ruby on Rails</b> using <b>Postgresql</b>. Front end built with <b>JS</b> and using <b>CSS Grid</b>.</p>
          </div>
          <div className="proj_img">
            <a className="img_a" href="http://dutch-uncle.herokuapp.com/"><img src="/ikigai.png" alt=""/></a>
          </div>
        </div>

        <div className="work">
          <div className="proj_desc">
            <h3>X and O.</h3>
            <p>A simple game of noughts and crosses made with <b>CSS3 animations</b>.</p>
          </div>
          <div className="proj_img">
            <a className="img_a" href="http://evvn.github.io/x_and_o/"><img src="/xando.png" alt=""/></a>
          </div>
        </div>

      </div>
    )
  }
}

// const Work = AnimatedWrapper(WorkComponent)
export default Work;
