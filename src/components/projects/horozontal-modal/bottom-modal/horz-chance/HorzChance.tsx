import './horz-chance.sass'

function HorzChance({ images, accessor, tech, setTech }) {

  return (
    <div
      className={`'h-view-tech-container' ${tech ? 'h-tech-show' : 'h-tech-hide'}`}>
      <button onClick={() => setTech(!tech)} className='hb-view-tech'>
        <p>Tech</p>
      </button>

      <div className='h-popup-tech'>
        <p>Technologies</p>
        {images[accessor].icons.map((item, id) =>
          <img className="h-tech-icons" src={item} />
        )}
        <a href={images[accessor].repo}>
          <button>View Repo</button>
        </a>
      </div>


    </div>
  )
}

export default HorzChance
