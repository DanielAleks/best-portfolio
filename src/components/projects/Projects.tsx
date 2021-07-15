import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import './projects.sass'
import Modals from './modals/Modals'
import HorozontalModal from './horozontal-modal/HorozontalModal'
import { useWindowSize } from '../../App'
import ReactGA from 'react-ga'
import BBH from '../../assets/images/blueberries/desktop/homeD.png'
import Desktop from '../../assets/images/portfolio/desktop.png'
import Mobile from '../../assets/images/portfolio/mobilePng.png'
import '../technologies/technologies.sass'

function Projects({ images, accessor, setAccessor, active, setActive }) {
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
        <div className='project-text-container'>
          <h1>Projects</h1>
          <p>Completed and published projects that you can check out right now.</p>
        </div>
      </div>

      <div className='main-image-container'>

        {images.map((item, id) =>
          <div className='pairing-image-container'>
            <div className="m-image-container">
              <img onClick={() => openModal(id)} className='m-device-img' src={Mobile} />
              <img onClick={() => openModal(id)} className='m-bg-img' src={item.mobile[0]} />
            </div>
            <div className="d-image-container">
              <img onClick={() => openModal(id)} className='d-device-img' src={Desktop} />
              <img onClick={() => openModal(id)} className='d-bg-img' src={item.desktop[0]} />
            </div>
          </div>
        )}

      </div>



      {/* {images.map((item, id) =>
          <div onClick={() => openModal(id)}>
            <img
              style={{ animationDelay: `${imageAnimationHandler(id)}s` }}
              src={item.main} />
          </div>
        )}
        {images.map((item) =>
          <div className={item.container}>
            <img
              className={item.bg}
              src={item.src}
            />
            <img className={item.device} src={item.deviceSrc} />
          </div>
        )} */}








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