
import { API_BASE_URL } from "../config";
import Poster from "./Poster";
import PosterGrid from "./PosterGrid";
import { PosterContext } from "../Pages/Apartment";
import { useContext } from "react";


function AptBox({apartment}) {
  const {editable, setEditable} = useContext(PosterContext)
  //console.log("editable", editable)


  const aptBoxApartment = apartment;
  //console.log('aptbox hej', aptBoxApartment.aptImg);
  return (
    <div className="AptBox-frame">
        <h1 className="apt-title">Property for sale</h1>
        { aptBoxApartment && <img src={`${API_BASE_URL}${aptBoxApartment.aptImg}`} alt="The apartment" /> }
        <PosterGrid />   
        <button onClick={() => setEditable(!editable)}>{editable ? "DONE" : "EDIT"}</button> 
    </div>
  )
}

export default AptBox;

