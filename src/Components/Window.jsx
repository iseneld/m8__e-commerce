import AptPopUp from './AptPopUp';
import Popup from 'reactjs-popup';
import { API_BASE_URL } from "../config";
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import coin2png from '../Styles/css-content/coin2.png';

const Window = ({apartment}) => {
  const apartmentProp = apartment;

  return (
    <>
      <section className={apartmentProp && apartmentProp.ownerName === "For sale!" ? "window-forsale" : "window-owned"}>
        <Popup trigger={<button className="window-btn"> </button>}
          position="right center" contentStyle={{ width: "300px" }}>
          <div>
            { apartmentProp && <h1>{`Apartment ${apartmentProp.aptNumber}`}</h1>}
            <section className="pop-up-apt-display">
              <div className="pop-up-apt-image">
                {apartmentProp && <img src={`${API_BASE_URL}${apartmentProp.aptImg}`} alt="apartment background" /> }
              </div>
              <section className="abt-apartment">
              {apartmentProp && <h3>{apartmentProp.ownerName === "For sale!" ? "For sale!" : apartmentProp.ownerName === "Showcase" ? "Showcase" : `Owned by ${apartmentProp.ownerName}`}</h3>}
                <ul>
                  <li><div className='apt-price-tag apt-price-tag--for-popup'><img src={coin2png} alt="HCoin" className='HC-icon' /><p>{`${apartmentProp && apartmentProp.price} HC`} </p></div></li>
                  <li><p>Your coins: </p></li>
                </ul>
              </section>
              <section className="apt-buttons">
                <Link to={`/apartment/${apartmentProp && apartmentProp.aptNumber}`}><button className="pop-up-btn" id="view-btn">View</button></Link>
                <button className="pop-up-btn" id={apartmentProp && apartmentProp.ownerName != "For sale!" ? "pop-up-offer-btn" :"pop-up-buy-btn"}>{apartmentProp && apartmentProp.ownerName != "For sale!" ? "Make Offer" :"Buy now"}</button> 
              </section>
            </section>
          </div>
        </Popup>
      </section>
      {/* <Link to="/apartment" className="window"> */}

      {/* <article onClick={AptPopUp}></article>
    </Link>*/}
    </>
    );

  };

export default Window;
