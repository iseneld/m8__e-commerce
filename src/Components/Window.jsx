import { Link } from 'react-router-dom';
import AptPopUp from './AptPopUp';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Window = () => (
  <>
    <section className="window">
      <Popup trigger={<button className="window-btn"> </button>}
        position="right center">
        <div>
          <h1>Apartment 1</h1>
          <h3>This property is for sale!</h3>
          <section className="abt-apartment">
            <ul>
              <li>ID: </li>
              <li>Prize:</li>
              <li>Your coins:</li>
            </ul>
          </section>
          <section className="apt-buttons">
            <button>VIEW</button>
            <button>BUY</button>
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