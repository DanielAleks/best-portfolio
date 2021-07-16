import React, { useState } from 'react'
import './technologies.sass'
import ReactLogo from '../../assets/images/icons/react-Logo.png'
import AngularLogo from '../../assets/images/icons/angular.png'
import VueLogo from '../../assets/images/icons/vue.png'
import Bulma from '../../assets/images/icons/bulma-logo.png'
import Css from '../../assets/images/icons/css.png'
import Expo from '../../assets/images/icons/expoLogo.png'
import Figma from '../../assets/images/icons/Figma.png'
import GA from '../../assets/images/icons/gaLogo.png'
import Github from '../../assets/images/icons/github.png'
import Html from '../../assets/images/icons/html.png'
import Js from '../../assets/images/icons/javascript.png'
import Npm from '../../assets/images/icons/npm.png'
import Paper from '../../assets/images/icons/paper.png'
import Spring from '../../assets/images/icons/react-spring.png'
import Redux from '../../assets/images/icons/redux.png'
import Sass from '../../assets/images/icons/sassLogo.png'
import StyledC from '../../assets/images/icons/styled-Components.png'
import Tailwind from '../../assets/images/icons/tailwind.png'
import TS from '../../assets/images/icons/typescript.png'
import Yarn from '../../assets/images/icons/yarn-logo.png'
import BootStrap from '../../assets/images/icons/bootstrap.png'
import Netlify from '../../assets/images/icons/netlify.png'
import { Scrollbars } from 'react-custom-scrollbars';
import { BsImages } from 'react-icons/bs'
import { GiLightSabers } from 'react-icons/gi'

function Technologies() {

  const iconData = [
    ReactLogo, AngularLogo, VueLogo, Github, TS, Redux, Sass, BootStrap, Figma, Bulma, Yarn,
    Paper, GA, Expo, Spring, Css, Html, Js, Npm, StyledC, Tailwind, Netlify
  ]
  const nameData = [
    'React', 'Angular', 'Vue', 'Github', 'Typescript', 'Redux', 'Sass', 'Figma', 'Bulma',
    'Yarn', 'React-Paper', 'Google-Analytics', 'Expo', 'React-Spring', 'Css', 'Html',
    'Javascript', 'Npm', 'Styled-Components', 'Tailwind'
  ]

  return (
    <div className='tech-container'>
      <div className='tech-info-container'>
        <p className="tech-header">Technologies</p>
      </div>


      <div className='green-tech-container' >
      {/* <Scrollbars style={{ width: '100%', height: '100vh' }}> */}


      <div className='tech-content-container'>

          <div className='inner-green-container'>
            {iconData.map((item, id) =>
              <div
                style={{ animationDelay: `${id * .05}s` }}
                className='icon-container'>
                <img className="icon-image" src={item} />
              </div>
            )}
          </div>
        </div>
      {/* </Scrollbars>  */}
      </div>
    </div>
  )
}

export default Technologies