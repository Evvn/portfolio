import React from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'
import * as emailjs from 'emailjs-com'

class SendEmail extends React.Component{
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      errors: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }

  handleInputChange (event) {
    event.preventDefault()
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({[name]: value})
  }

  validateMail () {
    let errors = {}
    let formIsValid = true

    if (!this.state.name || this.state.name.length < 3) {
      errors.name = 'Minimum 3 characters'
      formIsValid = false
    }

    if (!this.state.subject || this.state.subject.length < 3) {
      errors.subject = 'Minimum 3 characters'
      formIsValid = false
    }

    if (!this.state.message || this.state.message.length < 3) {
      errors.message = 'Minimum 3 characters'
      formIsValid = false
    }

    if (!this.state.email || this.state.email.length < 3) {
      errors.email = 'Minimum 3 characters'
      formIsValid = false
    }


    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (!pattern.test(this.state.email)) {
      errors.email = 'This is not a valid email'
      formIsValid = false
    }

    this.setState({
      errors: errors
    })

    return formIsValid
  }

  sentMessage (event) {
    event.preventDefault()

    if (!this.validateMail()) {
      return
    }

    var templateParams = {
      from_name: this.state.name + ' (' + this.state.email + ')',
      to_name: 'Evan',
      subject: this.state.subject,
      message_html: this.state.message
    }

    emailjs.send('outlook', 'template_tsqCor1k', templateParams, 'user_x42GvzZR07ZAcpHuTPxlr')
      .then(function (response) {
        console.log('Success!', response.status, response.text )
      }, function(err) {
        console.log(err)
      })

    this.setState({
      name: '',
      email: '',
      subject: '',
      message: 'Talk to you soon :)'
    })
  }

  render() {

    return(
      <div>

        <form
          id = {this.props.id}
          className = {this.props.className}
          name = {this.props.name}
          method = {this.props.method}
          action = {this.props.action}
        >

          <Input
            type = 'text'
            name = 'name'
            className = 'form-control'
            required = 'required'
            onChange = {this.handleInputChange.bind(this)}
            value = {this.state.name}
            error = {this.state.errors.name}
          />

          <Input
            type = 'email'
            name = 'email'
            className = 'form-control'
            required = 'required'
            onChange = {this.handleInputChange.bind(this)}
            value = {this.state.email}
            error = {this.state.errors.email}
          />

          <Input
            type = 'text'
            name = 'subject'
            className = 'form-control'
            required = 'required'
            onChange = {this.handleInputChange.bind(this)}
            value = {this.state.subject}
            error = {this.state.errors.subject}
          />

          <TextArea
            name = 'message'
            id = 'message'
            required = 'required'
            className = 'form-control'
            rows = '8'
            onChange = {this.handleInputChange.bind(this)}
            value = {this.state.message}
            error = {this.state.errors.message}
          />

          <Button
            onClick = {this.sentMessage.bind(this)}
            type = 'button'
            name = 'submit'
            className = 'btn btn-primary btn-lg'
            required = 'required'
          />

        </form>

      </div>
    )
  }
}

export default SendEmail
