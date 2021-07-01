import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import './projects.sass'
import Modals from './modals/Modals'
import HorozontalModal from './horozontal-modal/HorozontalModal'
import { useWindowSize } from '../../App'
import ReactGA from 'react-ga'

function Projects({images, accessor, setAccessor, active, setActive}) {
  const size = useWindowSize()
  const [isAnimated, setIsAnimated] = useState(false)
  const [tech, setTech] = useState(false)
  const [details, setDetails] = useState(false)

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

  const weatherApp = () => {
    ReactGA.event({
      category: 'weatherApp',
      action: 'opened weatherApp modal'
    });
  }
  const wildlifeApp = () => {
    ReactGA.event({
      category: 'wildlifeApp',
      action: 'opened meditation modal'
    });
  }
  const blueberryApp = () => {
    ReactGA.event({
      category: 'blueberryApp',
      action: 'opened blueberryApp modal'
    });
  }
  const meditationApp = () => {
    ReactGA.event({
      category: 'meditationApp',
      action: 'opened meditationApp modal'
    });
  }


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
      <div className='project-rock-bg' />

      <Scrollbars style={{ width: '100%', height: '100%' }}>
        <div className='main-images'>
          <div className='inner-images-container'>
            {images.map((item, id) =>
              <div onClick={() => openModal(id)}>
                <img
                  style={{ animationDelay: `${imageAnimationHandler(id)}s` }}
                  src={item.main} />
              </div>
            )}
          </div>
        </div>
      </Scrollbars>

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