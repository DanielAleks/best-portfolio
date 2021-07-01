import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/style.sass";
import Meditation1D from "./assets/images/meditation/desktop/meditation1.jpg";
import Meditation2D from "./assets/images/meditation/desktop/meditation2.jpg";
import Meditation3D from "./assets/images/meditation/desktop/meditation3.jpg";
import Meditation1M from "./assets/images/meditation/mobile/meditation1.png";
import Meditation2M from "./assets/images/meditation/mobile/meditation2.png";
import Meditation3M from "./assets/images/meditation/mobile/meditation3.png";
import BBHomeD from "./assets/images/blueberries/desktop/homeD.png";
import BBBenefitsD from "./assets/images/blueberries/desktop/benefitsD.png";
import BBFreezingD from "./assets/images/blueberries/desktop/freezingD.png";
import BBRecipesD from "./assets/images/blueberries/desktop/recipesD.png";
import BBRecipesModalD from "./assets/images/blueberries/desktop/recipesModalD.png";
import BBBenefitsM from "./assets/images/blueberries/mobile/benefitsM.png";
import BBFreezingM from "./assets/images/blueberries/mobile/freezingM.png";
import BBHomeM from "./assets/images/blueberries/mobile/homeM.png";
import BBRecipesM from "./assets/images/blueberries/mobile/recipesM.png";
import BBRecipesModalM from "./assets/images/blueberries/mobile/recipesModalM.png";
import AfghanistanD from "./assets/images/weather/desktop/afghanistanD.png";
import CaliD from "./assets/images/weather/desktop/caliD.png";
import JapanD from "./assets/images/weather/desktop/japanD.png";
import AfghanistanM from "./assets/images/weather/mobile/afghanistanM.png";
import CaliM from "./assets/images/weather/mobile/caliM.png";
import JapanM from "./assets/images/weather/mobile/japanM.png";
import WLHomeD from "./assets/images/wildlife/desktop/homeD.png";
import WLArticlesD from "./assets/images/wildlife/desktop/articlesD.png";
import WLGalleryD from "./assets/images/wildlife/desktop/galleryD.png";
import WLHomeBottomD from "./assets/images/wildlife/desktop/homeBottomD.png";
import WLHomeM from "./assets/images/wildlife/mobile/homeM.png";
import WLArticlesM from "./assets/images/wildlife/mobile/articlesM.png";
import WLGalleryM from "./assets/images/wildlife/mobile/galleryM.png";
import WLHomeBottomM from "./assets/images/wildlife/mobile/homeBottomM.png";
import Transparent from "./assets/images/portfolio/transparent.png";
import ReactLogo from "./assets/images/icons/react-Logo.png";
import VueLogo from "./assets/images/icons/vue.png";
import AngularLogo from "./assets/images/icons/angular.png";
import Sass from "./assets/images/icons/sassLogo.png";
import Figma from "./assets/images/icons/Figma.png";
import StyledC from "./assets/images/icons/styled-Components.png";
import Css from "./assets/images/icons/css.png";
import Spring from "./assets/images/icons/react-spring.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Technologies from "./components/technologies/Technologies";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import AnotherWay from "./components/contact/another-way/AnotherWay";
import ReactGa from "react-ga";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

const images: any = [
  {
    main: JapanD,
    desktop: [JapanD, CaliD, AfghanistanD],
    mobile: [JapanM, CaliM, AfghanistanM],
    title: "QuickWeather",
    desc:
      "A simple weather app that keeps information on the weather up to date. Wanting to do more complex things with react, I fetched data from an API and focused on client-side functionality.",
    icons: [Sass, ReactLogo, Figma],
    website: "https://daniel-aleksandrov-quickweather.netlify.app/",
    repo: "https://github.com/DanielAleks/weather-app",
  },
  {
    main: WLHomeD,
    desktop: [WLHomeD, WLHomeBottomD, WLArticlesD, WLGalleryD],
    mobile: [WLHomeM, WLHomeBottomM, WLArticlesM, WLGalleryM],
    title: "Save Wildlife",
    desc:
      "List of endangered species that need our help. I used an animal conservation API. The API has since been removed and I had to add my own data, unfortunately.",
    icons: [Sass, ReactLogo, Figma, Spring],
    website: "https://daniel-aleksandrov-savewildlife.netlify.app/",
    repo: "https://github.com/DanielAleks/save-wildlife",
  },
  {
    main: BBHomeD,
    desktop: [BBHomeD, BBRecipesD, BBFreezingD, BBBenefitsD, BBRecipesModalD],
    mobile: [BBHomeM, BBRecipesM, BBFreezingM, BBBenefitsM, BBRecipesModalM],
    title: "Blueberry Tribute",
    desc:
      "A tribute to the most glorious and yummiest fruit out there! Displays a few recipes made with blueberries, instructions on how to freeze blueberries properly, and the health benefits of them.",
    icons: [Sass, VueLogo, Figma],
    website: "https://daniel-aleksandrov-blueberrytribute.netlify.app/",
    repo: "https://github.com/DanielAleks/Blueberry-Tribute",
  },
  {
    main: Meditation1D,
    desktop: [Meditation1D, Meditation2D, Meditation3D],
    mobile: [Meditation1M, Meditation2M, Meditation3M],
    title: "Meditation App",
    desc:
      "Exhibits helpful meditations to the stressed. Primarily focused on UX design; responsiveness, simple animations with an animation library (AOS), and a little bit of React with a React carousel library.",
    icons: [Css, ReactLogo, Figma, StyledC],
    website: "https://daniel-aleksandrov-meditation.netlify.app/",
    repo: "https://github.com/DanielAleks/metta",
  },
];

function App() {
  const size = useWindowSize();
  const [isNav, setIsNav] = useState(false);
  const [accessor, setAccessor] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    size.width <= 900 ? setIsNav(false) : setIsNav(true);
  }, [size.width]);

  useEffect(() => {
    ReactGa.initialize("UA-190747385-1");
    ReactGa.pageview("/");
  }, []);

  return (
    <Router>
      <div>
        <Navbar
          isAnimated={isAnimated}
          setIsAnimated={setIsAnimated}
          setIsNav={setIsNav}
          isNav={isNav}
          size={size}
        />

        <Switch>
          <Route exact path="/">
            <Home
              active={active}
              setActive={setActive}
              images={images}
              accessor={accessor}
              setAccessor={setAccessor}
            />
          </Route>
          <Route path="/projects">
            <Projects
              active={active}
              setActive={setActive}
              images={images}
              accessor={accessor}
              setAccessor={setAccessor}
            />
          </Route>
          <Route path="/tech">
            <Technologies />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/another-way">
            <AnotherWay />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
// <Main />

export default App;