import React from 'react'
import Desktop from "../../../assets/images/portfolio/desktop.png";
import Mobile from "../../../assets/images/portfolio/mobilePng.png";
import DesktopBg from "../../../assets/images/blueberries/desktop/homeD.png";
import './home-slider.sass'

function HomeSlider({ images, accessor }) {

  const sliderDisplay = [
    {
      container: 'mobileHome-images-container',
      bg: 'mobileHome-image-bg',
      device: 'mobileHome-image',
      deviceSrc: Mobile,
      src: images[accessor].mobile[0],
    },
    {
      container: 'desktopHome-images-container',
      bg: 'desktopHome-image-bg',
      device: 'desktopHome-image', 
      deviceSrc: Desktop,
      src: images[accessor].desktop[0],
    },
  ]
  return (
    <div className="slider-container">

      {sliderDisplay.map((item) =>
        <div className={item.container}>
          <img
            className={item.bg}
            src={item.src}
          />
          <img className={item.device} src={item.deviceSrc} />
        </div>
      )}
    </div>
  )
}

export default HomeSlider
