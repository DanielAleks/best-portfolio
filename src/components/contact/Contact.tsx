import ContactCards from './contact-cards/ContactCards';
import ContactComponent from './ContactComponent';
import { Scrollbars } from 'react-custom-scrollbars';
import './contact.sass'

function Contact() {
  return (
    <div id='contact' className='ctt-container'>
      <div className='contact-image-bg' />

      <ContactCards />

      <div className='contact-form-900px-cancel'>
        <ContactComponent />
      </div>
    </div>
  )
}

export default Contact