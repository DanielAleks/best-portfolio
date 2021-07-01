import ContactComponent from '../ContactComponent'
import { Link, useHistory } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';
import { useEffect } from 'react';
import { useWindowSize } from '../../../App';
import '../contact-cards/contact-cards.sass'
import './another-way.sass'

function AnotherWay() {
  const size = useWindowSize()
  const history = useHistory()

  const goContact = () => history.push('/contact')
  const stayAnotherWay = () => history.push('/another-way')

  useEffect(() => {
    size.width > 1100 ? goContact() : stayAnotherWay()
  }, [size.width])

  return (
    <div className='other-way-omni-container'>
      <div className='other-way-bg' />

      <Scrollbars style={{ width: '100%', height: "100vh" }}>
        <div className='other-way-inner-container'>
          <div className='other-way-container'>

            <ContactComponent />

            <div className="other-way-card">
              <Link className="Link-other-way" to="/contact">
                <p>Wrong Way?</p>
              </Link>
            </div>
          </div>
        </div>
      </Scrollbars>
    </div>
  )
}

export default AnotherWay