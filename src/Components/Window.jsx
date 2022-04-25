import AptPopUp from './AptPopUp';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import apartmentIMG from "../Styles/css-content/lgh1.jpeg";

const Window = () => (
  <>
    <section className="window">
      <Popup trigger={<button className="window-btn"> </button>}
        position="right center" contentStyle={{ width: "300px" }}>
        <div>
          <h1>Apartment 109</h1>
          <section className="pop-up-apt-display">
            <div className="pop-up-apt-image">
              <img src={apartmentIMG}></img>
            </div>
            <section className="abt-apartment">
              <h3>For sale!</h3>
              <ul>
                <li><p>Prize:</p></li>
                <li><p>Your coins:</p></li>
              </ul>
            </section>
            <section className="apt-buttons">
              <Link to="/apartment"><button className="arrow-effect effect-1">VIEW</button></Link>
              <button className="arrow-effect effect-1" id="pop-up-buy-btn">BUY</button>
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

export default Window;
