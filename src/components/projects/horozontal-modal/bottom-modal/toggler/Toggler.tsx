import './toggler.sass'

function Toggler({ isM, setIsM }) {

  const toggleHandleLocation = () => {
    if (isM) {
      return (100)
    } else return (0)
  }


  return (
    <div className="outer-toggle-container">
      <div
        className='toggle-container'
        onClick={() => setIsM(!isM)}>
        <div className='toggle-handle'
          style={{ transform: `translateX(${toggleHandleLocation()}%)` }}>
        </div>
      </div>

      <p>{isM ? 'Mobile' : 'Desktop'}</p>
    </div >
  )
}

export default Toggler