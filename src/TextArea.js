import React, { Component } from 'react'

class TextArea extends Component {
  render() {
    return(
      <div className="form-group">
        <label htmlFor="{this.props.name}">{this.props.name}</label>
        <textarea
          name = {this.props.name}
          id = {this.props.id}
          required = {this.props.required}
          className = {this.props.className}
          rows = {this.props.rows}
          onChange = {this.props.onChange}
          value = {this.props.value}
        />
        <span className="error">{this.props.error}</span>
      </div>
    )
  }
}

export default TextArea
