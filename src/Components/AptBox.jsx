import { API_BASE_URL } from "../config";
import PosterGrid from "./PosterGrid";
import { PosterContext } from "../Pages/Apartment";
import { useContext } from "react";


function AptBox({apartment}) {
  const {editable, setEditable} = useContext(PosterContext)
  //console.log("editable", editable)
  console.log(apartment._id)

  const initSetPosters = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/apartments/${apartment._id}`);
      const result = await response.json();
      console.log("GET RESULTS", result.posters)
      if(result.posters[2]) {
        for (var i = 1; i <= 3; i++) {
          localStorage.setItem(`poster${i}`, result.posters[i-1])
        }
      }
      else {
        for (var i = 1; i <= 3; i++) {
          localStorage.setItem(`poster${i}`, "")
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  if(!editable) {
    initSetPosters();
  }

  const editApartment = async () => {
    if(editable) {
        const posters = [];
        for (var i = 1; i <= 3; i++) {
          // IF POSTER EXISTS IN LOCALSTORAGE ADD IT ELSE ADD AN EMPTY STRING IN ITS STEAD
          posters[i-1] = localStorage.getItem("poster" + i) ? localStorage.getItem("poster" + i) : "";
        }
        console.log(posters)

        const settings = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({posters: posters}),
        }

        try {
          const response = await fetch(`${API_BASE_URL}/apartments/${apartment._id}`, settings);
          const result = await response.json();
          console.log("RESULT: ",result)
        } catch (error) {
          console.log("ERROR:", error);
        }

    }
    setEditable(!editable)
  }


  const aptBoxApartment = apartment;
  return (
    <div className="AptBox-frame">
        <h1 className="apt-title">Property for sale</h1>
        { aptBoxApartment && <img src={`${API_BASE_URL}${aptBoxApartment.aptImg}`} alt="The apartment" /> }
        <PosterGrid />   
        <button onClick={editApartment}>{editable ? "DONE" : "EDIT"}</button> 
    </div>
  )
}

export default AptBox;

