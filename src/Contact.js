import React, { Component } from 'react'
import SendEmail from './SendEmail'

class Contact extends Component {
  render() {
    return (
      <section>
        <h1>Contact</h1>

        <SendEmail
          id = "main-contact-form"
          className = "contact-form"
          name = "contact-form"
          method = "post"
          action = ""
        />

        <p>Welcome</p>
      </section>
    )
  }
}

export default Contact;
