import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactGA from 'react-ga';
import './style.sass'
import './animations.sass'

AOS.init({
  once: true
});

function Main() {

  useEffect(() => {
    document.body.style.overflow = 'unset';
  }, []);

  useEffect(() => {
    ReactGA.initialize('UA-190747385-1')
    ReactGA.pageview('/')
  }, []);

  return (
    <div className='omni-container'> 
    
    </div>
  )
}

export default Main


