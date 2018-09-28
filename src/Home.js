import React, { Component } from 'react';
// import AnimatedWrapper from "./AnimatedWrapper"

// class HomeComponent extends Component {
//   render() {
//     return (
//       <div className="page">
//         <h1 className="name"><span className="fname">Evan</span><br/><span className="lname">Amezcua.</span></h1>
//
//         <span><b>Front end web developer.<br/>Melbourne, AU.</b></span>
//       </div>
//     )
//   }
// }

class Home extends Component {
  render() {
    return (
      <div className="page">
        <h1 className="name"><span className="fname">Evan</span><br/><span className="lname">Amezcua.</span></h1>

        <span><b>Front end web developer.<br/>Melbourne, AU.</b></span>
      </div>
    )
  }
}

// const Home = AnimatedWrapper(HomeComponent)
export default Home;
