import { Link } from 'react-router-dom';
import AptPopUp from './AptPopUp';

const Window = () => (
  <>
  <Link to="/apartment" className="window">
    <article onClick={AptPopUp}></article>
  </Link>
  </>
  
  
);

export default Window;