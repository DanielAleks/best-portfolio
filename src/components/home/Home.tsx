import "./home.sass";
import Desktop from "../../assets/images/portfolio/desktop.png";
import Mobile from "../../assets/images/portfolio/mobilePng.png";
import DesktopBg from "../../assets/images/blueberries/desktop/homeD.png";
import { useEffect } from "react";

function Home({ images, accessor, setAccessor, active, setActive }) {
  const miniAbout =
    "Hello. I’m Daniel, I create thoughtfully designed masterpieces in the front-end. If you're looking for someone that can communicate in code and still contribute with creative thinking and designing, I’m your guy. Check out “Projects” to see some of my creations.";

  useEffect(() => {
    let accessorHandler = setInterval(
      () =>
        setAccessor((state) => {
          if (state < 3) {
            return state + 1;
          } else return (state = 0);
        }),
      5000
    );
    return () => clearInterval(accessorHandler);
  }, []);

  // const projectHandler = () => {
  //   setAccessor(0);
  //   setActive(true);
  // };

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
    <div className="home-container">

      <div className='top-info-container'>
        <h1>Home</h1>
        <p>“There’s no place like home” - Judy Garland</p>
      </div>

      <div className='home-bottom-container'>
        <div className="info-container">
          <h1>Creative Development</h1>
          <p>{miniAbout}</p>
          <a className='view-project-button' href="projects">
            <button>View Projects</button>
          </a>
        </div>

        <div className="slider-container">

          <div className="home-image-container">
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
        </div>
      </div>
    </div>
  );
}

export default Home;