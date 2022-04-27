import AptDisplay from "../Components/AptDisplay";
import "../Styles/css-content/lgh1.jpeg";
import Inventory from "../Components/Inventory";
import {useState, createContext} from "react";

export const PosterContext = createContext();



const Apartment = () => {

    const [selectedPoster, setSelectedPoster] = useState("")

    console.log(selectedPoster)

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
