import React from 'react'
import { Link } from "react-router-dom";
import './hired.sass'
// import hi from'

function Hired() {
  return (
    <div className="hired-container">
      <div className="bg-image-hired"></div>
      <p className='hired-title'>Hello, this is Daniel</p>
      <p className='hired-description'>Currently Hired, and not accepting offers.</p>
      <Link
        className='view-project-button'
        to="home">
        <button>Precede to Portfolio</button>
      </Link>
    </div>
  )
}

export default Hired
