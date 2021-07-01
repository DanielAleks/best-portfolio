import React, { useState } from 'react'
import Links from './Links'
import emailjs from 'emailjs-com';
import './contact.sass'

function ContactComponent() {
  const [messageInput, setMessageInput] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_81rn6db', e.target, 'user_6Nv2PbCHu4Ra401EdmDtl')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <section className="ctt-width section">
        <p className='header'>Contact Me</p>
        <div style={{animationDelay: '.1s'}} className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" name='name' placeholder="Your Name..." />
          </div>
        </div>

        <div style={{animationDelay: '.2s'}} className="field">
          <label className="label">Email</label>
          <input className="input" type="email" name='email' placeholder="Your Email..." />
        </div>

        <div style={{animationDelay: '.3s'}} className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Leave a message..."
              name='message'
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}>
            </textarea>
          </div>
        </div>

        <div style={{animationDelay: '.4s'}} className="field is-grouped">
          <button
            className="button is-link"
            value='Send' onClick={() =>
              alert('Email was sent')
            }>Submit</button>
        </div>

        <Links />

      </section>
    </form>
  )
}

export default ContactComponent