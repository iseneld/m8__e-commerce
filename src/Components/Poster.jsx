import {useState, useContext} from "react";
import { PosterContext } from "../Pages/Apartment";

function Poster({ posterId, setId, selectedPosterContainer }) {

  const { selectedPoster, setSelectedPoster, inAndOutState, setInAndOutState, editable } = useContext(PosterContext);

  if(selectedPosterContainer === posterId && selectedPoster) {
    localStorage.setItem("poster" + posterId, selectedPoster);
  }

  let localPoster = "";
  if (localStorage.getItem("poster" + posterId)) {
    localPoster = require(`../Styles/css-content/posters/${localStorage.getItem("poster" + posterId)}`);
  }

  console.log(localPoster)

  const changePoster = () => {
    setId();
    setSelectedPoster("");
    if(!inAndOutState) setInAndOutState(true);
  }

  //require(`../Styles/css-content/posters/${localStorage.getItem("poster" + posterId)}`)
  //poster === "" ? null : localStorage;

  return (
    <div className={`poster-frame ${selectedPosterContainer === posterId && editable ? "active" : ""} ${editable ? "editable" : ""}`} onClick={() => {if(editable) changePoster();}}>
      <img src={localPoster ? localPoster : ""} alt="" />
    </div>
  )
}

export default Poster