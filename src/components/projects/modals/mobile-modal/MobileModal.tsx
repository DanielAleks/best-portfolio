import { Scrollbars } from 'react-custom-scrollbars';
import './mobile-modal.sass'
import TechModal from './tech-modal/TechModal';

function MobilePopup({ accessor, images, tech, setTech, setDetails, size }) {
  return (
    <div className='mobile-outer-popup-container'>
      <div className='mobile-popup-container'>
        <Scrollbars style={{ width: size.width > 1300 ? 260 : 210, height: "100%" }}>
          {images[accessor].mobile.map((item) =>
            <img className='mobile-popup-image' src={item} />
          )}
        </Scrollbars>
      </div>

      <a href={images[accessor].repo} target='_blank'>
        <button className='b-view-repo'>
          <p>View Repo</p>
        </button>
      </a>

      <TechModal
        tech={tech}
        setTech={setTech}
        setDetails={setDetails}
        images={images}
        accessor={accessor}
      />
    </div>
  )
}

export default MobilePopup