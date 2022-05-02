import coin2png from '../Styles/css-content/coin2.png';
import { API_BASE_URL } from "../config";

function AptInfo({apartment}) {
  const aptInfoApartment = apartment;
  return (
    <div className="AptInfo-frame">
      <section className="about-apt">
                    <div className="about-apt-title">
                    { aptInfoApartment && <h2>{`Apartment ${aptInfoApartment.aptNumber}`}</h2>}
                      <div className='apt-price-tag'>
                        <img src={coin2png} alt="HCoin" className='HC-icon' />
                        <p>{`${aptInfoApartment && aptInfoApartment.price} HC`} </p>
                      </div>
                    </div>
                    <div className="about-apt-desc">
                    <p>{`${aptInfoApartment && aptInfoApartment.tier} tier apartment`}<br />{`${aptInfoApartment && aptInfoApartment.view}`}</p>
                    <button className="sell-btn">{aptInfoApartment && aptInfoApartment.ownerName != "For sale!" ? "Make Offer" :"Buy now"}</button>
                    </div>
        </section>
    </div>
  )
}

export default AptInfo
