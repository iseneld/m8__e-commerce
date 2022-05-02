import {useState, createContext} from "react";

// COMPONENTS
import AptDisplay from "../Components/AptDisplay";
import Inventory from "../Components/Inventory";

//STYLES
import "../Styles/css-content/lgh1.jpeg";

export const PosterContext = createContext();

const Apartment = () => {

    const [selectedPoster, setSelectedPoster] = useState("");

    console.log(selectedPoster);

    return (
        <PosterContext.Provider value={{selectedPoster, setSelectedPoster}}>
            <div className="article-container">
                <Inventory />
                <AptDisplay />
            </div>
        </PosterContext.Provider>
    )
}

export default Apartment;
