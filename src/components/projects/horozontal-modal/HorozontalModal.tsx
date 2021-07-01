import BottomModal from './bottom-modal/BottomModal'
import './horozontal-modal.sass'

function HorozontalModal({ accessor, images, tech, setTech, details, setDetails, isAnimated, closeModalHandler }) {
  return (
    <div className={isAnimated ? 'horz-modal-container' : 'horz-modal-container-off'}>
      <div className="active-overlay" onClick={closeModalHandler} />

      <BottomModal
        tech={tech}
        setTech={setTech}
        details={details}
        setDetails={setDetails}
        images={images}
        accessor={accessor}
      />
    </div>
  )
}

export default HorozontalModal