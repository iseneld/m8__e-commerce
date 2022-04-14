import { Link } from 'react-router-dom';

const PropertyList = () => {
    return (
        <>
            <div className="user-properties-listed">
                <section className="property-img">
                    <img src={require("../Styles/css-content/lgh2.jpeg")} />
                </section>
                <section className="about-property">
                    <h2>Apartment 109</h2>
                    <h5>Floor:</h5>
                    <ul className="about-property-row">
                        <li>789 XC</li>
                        <li>3 rooms</li>
                        <li>89 m2</li>
                    </ul>
                </section>
            </div>

            <div className="user-properties-listed">
                <section className="property-img">
                    <img src={require("../Styles/css-content/lgh2.jpeg")} />
                </section>
                <section className="about-property">
                    <h2>Apartment 109</h2>
                    <h5>Floor:</h5>
                    <ul className="about-property-row">
                        <li>789 XC</li>
                        <li>3 rooms</li>
                        <li>89 m2</li>
                    </ul>
                </section>
            </div>


        </>
    )
}

export default PropertyList;
