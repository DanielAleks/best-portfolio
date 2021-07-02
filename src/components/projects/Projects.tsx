import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import './projects.sass'
import Modals from './modals/Modals'
import HorozontalModal from './horozontal-modal/HorozontalModal'
import { useWindowSize } from '../../App'
import ReactGA from 'react-ga'
import ReactLogo from '../../assets/images/icons/react-Logo.png'
import AngularLogo from '../../assets/images/icons/angular.png'
import VueLogo from '../../assets/images/icons/vue.png'
import GA from '../../assets/images/icons/gaLogo.png'
import Github from '../../assets/images/icons/github.png'
import Redux from '../../assets/images/icons/redux.png'
import Sass from '../../assets/images/icons/sassLogo.png'
import TS from '../../assets/images/icons/typescript.png'
import Yarn from '../../assets/images/icons/yarn-logo.png'
import BootStrap from '../../assets/images/icons/bootstrap.png'
import '../technologies/technologies.sass'

function Projects({ images, accessor, setAccessor, active, setActive }) {
  const size = useWindowSize()
  const [isAnimated, setIsAnimated] = useState(false)
  const [tech, setTech] = useState(false)
  const [details, setDetails] = useState(false)

  const leftIcons = [
    ReactLogo, AngularLogo, VueLogo, Github, TS
  ]
  const rightIcons = [
    , Redux, Sass, Yarn, BootStrap, GA
  ]

  const openModal = (id): any => {
    setActive(!active)
    setAccessor(id)
    setIsAnimated(true)
    if (id === 0) {
      weatherApp()
    } else if (id === 1) {
      wildlifeApp()
    } else if (id === 2) {
      blueberryApp()
    } else if (id === 3) {
      meditationApp()
    }
  }

  const weatherApp = () => { ReactGA.event({ category: 'weatherApp', action: 'opened weatherApp modal' }); }
  const wildlifeApp = () => { ReactGA.event({ category: 'wildlifeApp', action: 'opened meditation modal' }); }
  const blueberryApp = () => { ReactGA.event({ category: 'blueberryApp', action: 'opened blueberryApp modal' }); }
  const meditationApp = () => { ReactGA.event({ category: 'meditationApp', action: 'opened meditationApp modal' }); }


  const imageAnimationHandler = (id) => {
    if (size.width > 900) {
      if (id === 0) {
      } else if (id === 1) {
        return .1
      } else if (id === 2) {
        return .4
      } else if (id === 3) {
        return .3
      }
    } else if (id === 0) {
      return .4
    } else if (id === 1) {
      return .3
    } else if (id === 2) {
      return .2
    } else if (id === 3) {
      return .1
    }
  }

  const closeModalHandler = () => {
    setIsAnimated(false)
    setTimeout(() => {
      setActive(false);
    }, 500)
  }

  return (
    <div className="project-container">
      <div className="project-info-container">
        <div className='project-left-icons'>
          {leftIcons.map((item) =>
            <div className='icon-container'>
              <img className="icon-image" src={item} />
            </div>
          )}
        </div>

        <div className='project-text-container'>
          <h1>Projects</h1>
          <p>Completed and published projects that you can check out right now.</p>
          <p>A few of the used technologies and languages that were used.</p>
        </div>

        <div className='project-right-icons'>
          {rightIcons.map((item) =>
            <div>
              <img src={item} />
            </div>
          )}
        </div>
      </div>


      <div className='main-images'>
        {images.map((item, id) =>
          <div onClick={() => openModal(id)}>
            <img
              style={{ animationDelay: `${imageAnimationHandler(id)}s` }}
              src={item.main} />
          </div>
        )}
      </div>







      {active &&
        <Modals
          closeModalHandler={closeModalHandler}
          isAnimated={isAnimated}
          tech={tech}
          setTech={setTech}
          details={details}
          setDetails={setDetails}
          accessor={accessor}
          images={images}
        />
      }

      {active &&
        <HorozontalModal
          closeModalHandler={closeModalHandler}
          isAnimated={isAnimated}
          tech={tech}
          setTech={setTech}
          details={details}
          setDetails={setDetails}
          accessor={accessor}
          images={images}
        />
      }
    </div>
  )
}

export default Projects