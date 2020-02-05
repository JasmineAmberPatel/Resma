import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message'
}

formSubmit = (e) => {
  e.preventDefault()

  this.setState({
      buttonText: '...sending'
  })

  let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
  }
  
  axios.post('API_URI', data)
  .then( res => {
      this.setState({ sent: true }, this.resetForm())
  })
  .catch( () => {
    console.log('Message not sent')
  })
}

resetForm = () => {
  this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent'
  })
}

render() {
  return (
    <div className="Contact">
      <h2 className="Subtitle">Get In Touch:</h2>
      <form className="form-group" onSubmit={(e) => this.formSubmit(e)}>
        <label class="message Paragraph" htmlFor="message-input">Your Message</label>
        <textarea onChange={e => this.setState({ message: e.target.value })} name="message" class="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required />
        <br/>
        <label class="message-name Paragraph" htmlFor="message-name">Your Name</label>
        <input onChange={e => this.setState({ name: e.target.value })} name="name" class="message-name" type="text" placeholder="Your Name" value={this.state.name} />
        <br/>
        <label class="message-email Paragraph" htmlFor="message-email">Your Email</label>
        <input onChange={(e) => this.setState({ email: e.target.value })} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />
        <br/>
        <div className="button--container">
          <button type="submit" className="btn btn-dark Paragraph">{this.state.buttonText}</button>
        </div>
      </form>
    </div>
  );
}
}

export default Contact;

