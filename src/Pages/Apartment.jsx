import AptDisplay from "../Components/AptDisplay";
import "../Styles/css-content/lgh1.jpeg";
import Inventory from "../Components/Inventory";


const Apartment = () => {
    return (
        <>
            <div className="article-container">
                <Inventory />
                <AptDisplay />
            </div>

        </>
    )
}

export default Apartment;
