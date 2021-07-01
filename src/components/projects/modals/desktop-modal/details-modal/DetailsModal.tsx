import { useWindowSize } from '../../../../../App'
import './details-modal.sass'

function DetailsModal({ images, accessor, details, setDetails, setTech }) {
  const size = useWindowSize()

  const detailsHandler = () => {
    if (size.width < 1130 && size.height < 800) {
      setTech(false)
      setDetails(!details)
    } else
      setDetails(!details)
  }

  return (
    <div className={`'details-container' ${details ? 'details-show' : 'details-hide'}`}>
      <button onClick={detailsHandler} className='b-view-details'>
        <p>More Details</p>
      </button>
      <div className='popup-details'>
        <h1>{images[accessor].title}</h1>
        <p>{images[accessor].desc}</p>
      </div>
    </div>
  )
}

export default DetailsModal
