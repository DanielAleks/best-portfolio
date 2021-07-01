import { Scrollbars } from 'react-custom-scrollbars';
import ReactGA from 'react-ga'
import DetailsModal from './details-modal/DetailsModal';
import './desktop-modal.sass'

function DesktopPopup({ accessor, images, details, setDetails, setTech, size }) {

  const visitHandler = () => {
    switch (accessor) {
      case 0:
        ReactGA.event({ category: 'Visited WeatherApp', action: 'clicked on visit in weather modal' }); break;
      case 1:
        ReactGA.event({ category: 'Visited WildlifeApp', action: 'clicked on visit in wildlife modal' }); break;
      case 2:
        ReactGA.event({ category: 'Visited BluberryApp', action: 'clicked on visit in blueberry modal' }); break;
      case 3:
        ReactGA.event({ category: 'Visited MeditationApp', action: 'clicked on visit in meditation modal' }); break;
      default:
        ReactGA.event({ category: 'Visited Site', action: 'clicked on visit in modal' });
    }
  }

  return (
    <div className='desktop-outer-popup-container'>
      <div className='desktop-popup-container'>
        <Scrollbars style={{ width: size.width > 1300 ? 460 : 395, height: "100%" }}>
          {images[accessor].desktop.map((item, id) =>
            <img style={{ animationDelay: `${id * .1}s` }} src={item} />
          )}
        </Scrollbars>
      </div>

      <a href={images[accessor].website} onClick={visitHandler} target='_blank'>
        <button className='b-visit-site'>
          <p>Visit Site</p>
        </button>
      </a>

      <DetailsModal
        images={images}
        accessor={accessor}
        details={details}
        setDetails={setDetails}
        setTech={setTech}
      />
    </div>
  )
}

export default DesktopPopup