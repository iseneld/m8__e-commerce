import { Link } from 'react-router-dom';
import coin2png from '../Styles/css-content/coin2.png'
const PropertyItem = () => {
    return (
        <>
            <div className="user-properties-listed">
                <section className="property-img">
                    <img src={require("../Styles/css-content/lgh2.jpeg")} />
                </section>
                <section className="about-property">
                    <h2>Apartment 109</h2>
                    <p>Floor:</p> 
                    <div className="apartment-cost">
                    <img src={coin2png} alt="image of coins"/>
                    <p>789 HC</p>
                    </div>
                    <section className="view-sell-btns">
                    <button className="btn">View</button>
                    <button className="btn btn--sellbtn">Buy</button>
                    </section>
                </section>
            </div>


        </>
    )
}

export default PropertyItem;
