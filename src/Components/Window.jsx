import AptPopUp from './AptPopUp';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

const Window = () => (
  <article className="window" /* onClick={AptPopUp} */>
    <Popup trigger={<button className="window-button"></button>}
      position="right center" open={true}>

      <div className="pop-up">
        <h1>Apartment 109</h1>
        <h3>This property is for sale!</h3>
        <section className="about-property">
          <ul>
            <li>ID:</li>
            <li>Prize:</li>
            <li>Your coins:</li>
          </ul>
        </section>

        <section className="buttons">
          <Link to="/apartment">
            <button>VIEW</button>
          </Link>
          <button>BUY</button>
        </section>
      </div>
    </Popup>
  </article>
);

export default Window;