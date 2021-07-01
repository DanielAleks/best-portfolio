import { Link } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';
import { useWindowSize } from '../../../App';
import ReactGA from 'react-ga'
import './contact-cards.sass'

function ContactCards() {
  const size = useWindowSize()

  const onGmailHandler = () => {
    ReactGA.event({
      category: 'Card Gmail',
      action: 'Card Gmail was clicked'
    });
  }

  const onGithubHandler = () => {
    ReactGA.event({
      category: 'Card Github',
      action: 'Card Github was clicked'
    });
  }

  const anotherWayHandler = () => {
    ReactGA.event({
      category: 'AnotherWay Clicked',
      action: 'Card AnotherWay was clicked'
    });
  }

  const GAHandler = (id) => {
    if (id === 1) {
      onGmailHandler()
    } else if (id === 2) {
      onGithubHandler()
    }
  }

  const card = [
    {
      title: 'Phone Number:',
      link: '(503)-997-4024',
      href: null
    },
    {
      title: 'Gmail:',
      link: 'daniel.aleksandrov73',
      href: 'https://mail.google.com/mail/u/0/#search/daniel.aleksandrov73'
    },
    {
      title: 'Github:',
      link: 'DanielAleks',
      href: 'https://github.com/DanielAleks'
    },
  ]

  const cardDelay = (id) => {
    if (id === 2) {
      return (0)
    } else if (id === 1) {
      return (.1)
    } else if (id === 0) {
      return (.2)
    }
  }

  return (
    <div className='contact-cards-container'>

      <Scrollbars style={{ width: '100vw', height: '100%' }}>
        <div className='cards-inner-container'>
          <div className='cards-innermost-container'>
            {card.map((item, id) =>
              <a onClick={() => GAHandler(id)} style={{ cursor: id === 0 ? 'auto' : 'pointer' }} href={item.href} target='_blank'>
                <div style={{ animationDelay: `${cardDelay(id)}s` }} className="contact-information">
                  <p>{item.title}</p>
                  <p
                    style={{ textDecoration: id === 0 ? 'none' : 'underline' }} >{item.link}</p>
                </div>
              </a>
            )}

            <div className="another-way-card">
              <Link onClick={anotherWayHandler} className='Link-another-styles' to="another-way">
                <p>Another Way</p>
              </Link>
            </div>
          </div>
        </div>
      </Scrollbars>
    </div>
  )
}

export default ContactCards