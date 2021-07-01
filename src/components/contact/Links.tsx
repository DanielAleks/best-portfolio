import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import ReactGA from 'react-ga'

function Links() {

  const onGmailHandler = () => {
    ReactGA.event({
      category: 'Contact-Gmail',
      action: 'went to my gmail'
    });
  }

  const onGithubHandler = () => {
    ReactGA.event({
      category: 'Contact-Github',
      action: 'went to my github'
    });
  }

  const links = [
    {
      icon: CgMail,
      delay: 0,
      handler: onGmailHandler,
      href: 'https://mail.google.com/mail/u/0/#search/daniel.aleksandrov73'
    },
    {
      icon: AiFillGithub,
      delay: 100,
      handler: onGithubHandler,
      href: 'https://github.com/DanielAleks'

    }
  ]

  return (
    <div style={{animationDelay: '.4s'}} className='links'>
      {links.map((item) =>
        <a data-aos="fade-up"
          data-aos-delay={item.delay}
          onClick={item.handler}
          href={item.href}
          target='_blank' className='link-margin'>
          <item.icon size={30} />
        </a>
      )}
    </div>
  )
}

export default Links