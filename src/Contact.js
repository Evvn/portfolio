import React, { Component } from 'react'
import SendEmail from './SendEmail'
import Typing from 'react-typing-animation'
// import AnimatedWrapper from "./AnimatedWrapper"

// class ContactComponent extends Component {
//   render() {
//     return (
//       <div className="page">
//         <h2>Send me something.</h2>
//
//         <SendEmail
//           id = "main-contact-form"
//           className = "contact-form"
//           name = "contact-form"
//           method = "post"
//           action = ""
//         />
//       </div>
//     )
//   }
// }

class Contact extends Component {
  render() {
    return (
      <div className="page contact">

        <Typing
          speed={150}
          >
          <h2>Send me something.</h2>
        </Typing>

        <SendEmail
          id = "main-contact-form"
          className = "contact-form"
          name = "contact-form"
          method = "post"
          action = ""
        />
      </div>
    )
  }
}

// const Contact = AnimatedWrapper(ContactComponent)
export default Contact;
