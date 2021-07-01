import './horz-community-chest.sass'

function HorzCommunityChest({ images, accessor, Z, setZ, details, setDetails }) {

  return (
    <div
      onMouseEnter={() => setZ(1)}
      onMouseLeave={() => setZ(0)}
      style={{ zIndex: Z === 0 ? -2 : -1 }}
      className={`'h-details-container' ${details ? 'h-details-show' : 'h-details-hide'}`}>
      <button onClick={() => setDetails(!details)} className='hb-view-details'>
        <p>Community Chest</p>
      </button>
      <div className='h-popup-details'>
        <h1>{images[accessor].title}</h1>
        <p>{images[accessor].desc}</p>
        <a href={images[accessor].website}>
          <button>Visit Site</button>
        </a>
      </div>
    </div>
  )
}

export default HorzCommunityChest