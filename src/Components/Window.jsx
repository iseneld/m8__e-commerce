import AptPopUp from './AptPopUp';
import Popup from 'reactjs-popup';

const Window = () => (
  <article className="window" /* onClick={AptPopUp} */>
    <Popup trigger={<button>Click here</button>}
      position="right center" open={true}>
      <div className="pop-up">
        <h1>hej</h1>
        <p>blabla</p>
      </div>
    </Popup>
  </article>
);

export default Window;