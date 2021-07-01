import React, { useState } from 'react'
import HorzChance from './horz-chance/HorzChance'
import HorzCommunityChest from './horz-community-chest/HorzCommunityChest'
import Toggler from './toggler/Toggler'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './bottom-modal.sass'

function BottomModal({ images, accessor, tech, setTech, details, setDetails }) {
  const [isM, setIsM] = useState(false)
  const [Z, setZ] = useState<number>(0)

  var mobileSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  var desktopSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='bottom-modal-container'>
      <div className='bottom-popup-container'>

        <Toggler isM={isM} setIsM={setIsM} />

        {isM &&
          <Slider className='bottom-carousel-container' {...mobileSettings}>
            {isM && images[accessor].mobile.map((item) =>
              <div>
                <img className="mobile-image" src={item} />
              </div>
            )}
          </Slider>}

        {!isM &&
          <Slider className='bottom-carousel-container' {...desktopSettings}>
            {images[accessor].desktop.map((item) =>
              <div className='poopsy' >
                <img className="desktop-image" src={item} />
              </div>
            )}
          </Slider>}

      </div >

      <HorzChance
        tech={tech}
        setTech={setTech}
        images={images}
        accessor={accessor}
      />
      <HorzCommunityChest
        details={details}
        setDetails={setDetails}
        Z={Z} setZ={setZ}
        images={images}
        accessor={accessor} />
    </div >
  )
}

export default BottomModal