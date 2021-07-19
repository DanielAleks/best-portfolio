import "./home.sass";
import { useEffect } from "react";
import HomeSlider from "./home-slider/HomeSlider";

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

        <HomeSlider images={images} accessor={accessor} />
      </div>
    </div>
  );
}

export default Home;