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
  const [expand, setExpand] = useState(10)

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

  const shakeHandler = (id) => {
    if (expand === id) {
      return '1.2s shake'
    } else if (expand === 10) {
      return null
    }
  }

  const enter = (id) => setExpand(id)
  const leave = () => setExpand(10)


  const DeviceComponent = ({ source, style, id }) => {
    return (
      <img
        onMouseOver={() => enter(id)}
        onMouseLeave={leave}
        style={{ animation: `${shakeHandler(id)}` }}
        onClick={() => openModal(id)} className={style} src={source} />
    )
  }

  const ProjectImages = () => {
    return (
      <div className='main-image-container'>
        {images.map((item, id) =>
          <div className='pairing-image-container'>
            <div style={{animationDelay: `${id * .2}s`}} className="m-image-container">
              <DeviceComponent id={id} source={Mobile} style={'m-device-img'} />
              <DeviceComponent id={id} source={item.mobile[0]} style={'m-bg-img'} />
            </div>
            <div style={{animationDelay: `${id * .1}s`}} className="d-image-container">
              <DeviceComponent id={id} source={Desktop} style={'d-desktop-img'} />
              <DeviceComponent id={id} source={item.desktop[0]} style={'d-bg-img'} />
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="project-container">

      <div className="project-info-container">
        <h1>Projects</h1>
        <p>Completed and published projects that you can check out right now.</p>
      </div>

      {size.width < 900 ?
        <Scrollbars style={{ width: '42rem', height: '100%' }}>
          <ProjectImages />
        </Scrollbars>
        :
        <ProjectImages />
      }









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