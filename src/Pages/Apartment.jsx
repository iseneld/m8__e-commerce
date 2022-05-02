import AptDisplay from "../Components/AptDisplay";
import "../Styles/css-content/lgh1.jpeg";
import Inventory from "../Components/Inventory";
import {useState, createContext} from "react";

export const PosterContext = createContext();



const Apartment = () => {

    const [selectedPoster, setSelectedPoster] = useState("")
    const [inAndOutState, setInAndOutState] = useState(false);
    const [editable, setEditable] = useState(false)

    console.log(selectedPoster)

    return (
        <PosterContext.Provider value={{selectedPoster, setSelectedPoster, inAndOutState, setInAndOutState, editable, setEditable}}>
            <div className="article-container">
            {editable ? <Inventory /> : null}
            <AptDisplay />
            </div>
        </PosterContext.Provider>
    )
}

export default Apartment;
