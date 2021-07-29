import React, { useEffect, useState } from 'react'
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

  const closeModalHandler = () => {
    setIsAnimated(false)
    setTimeout(() => {
      setActive(false);
    }, 500)
  }

  const hello = (cClass, fClass, sClass, device, which, id) => {
    return (
      <div className={cClass}>
        <img onClick={() => openModal(id)} className={fClass} src={device} />
        <img onClick={() => openModal(id)} className={sClass} src={which} />
      </div>
    )
  }

  const ProjectImages = () => {
    return (
      <div className='main-image-container'>
        {images.map((item, id) =>
          <div className='pairing-image-container'>
            {hello('m-image-container', 'm-device-img', 'm-bg-img', Mobile, item.mobile[0], id)}
            {hello('d-image-container', 'd-desktop-img', 'd-bg-img', Desktop, item.desktop[0], id)}
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