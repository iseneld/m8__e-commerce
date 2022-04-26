import AptPopUp from './AptPopUp';
import Popup from 'reactjs-popup';
import { API_BASE_URL } from "../config";
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';

const Window = ({apartment}) => {
  const apartmentProp = apartment;
  console.log(`Apartment: `, apartmentProp);
  
  return (
    <>
      <section className="window">
        <Popup trigger={<button className="window-btn"> </button>}
          position="right center" contentStyle={{ width: "300px" }}>
          <div>
            { apartmentProp && <h1>{`Apartment ${apartmentProp.aptNumber}`}</h1>}
            <section className="pop-up-apt-display">
              <div className="pop-up-apt-image">
                { apartmentProp && <img src={`${API_BASE_URL}${apartmentProp.aptImg}`} alt="hej" /> }
              </div>
              <section className="abt-apartment">
              {apartmentProp && apartmentProp.ownerName === "For sale!" && (<h3>For sale!</h3>)}
            {apartmentProp && apartmentProp.ownerName != "For sale!" && (<h3>Owned by {apartmentProp.ownerName}</h3>)}
                <ul>
                  <li><p>{`Prize: $${apartmentProp && apartmentProp.price}`} </p></li>
                  <li><p>Your coins: </p></li>
                </ul>
              </section>
              <section className="apt-buttons">
                <Link to="/apartment"><button>VIEW</button></Link>
                <button id="pop-up-buy-btn">BUY</button>
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
