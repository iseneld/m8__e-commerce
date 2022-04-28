
import { API_BASE_URL } from "../config";
import Poster from "./Poster";
import PosterGrid from "./PosterGrid";


function AptBox({apartment}) {
  const aptBoxApartment = apartment;
    console.log('aptbox hej', aptBoxApartment.aptImg);
  return (
    <div className="AptBox-frame">
        <h1 className="apt-title">Property for sale</h1>
        { aptBoxApartment && <img src={`${API_BASE_URL}${aptBoxApartment.aptImg}`} alt="The apartment" /> }
        <PosterGrid />   
    </div>
  )
}

export default AptBox;

