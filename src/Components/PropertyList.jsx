import { Link } from 'react-router-dom';

const PropertyList = () => {
    return (
        <>
            <ul className="user-properties-listed">
                <li className="property-list">
                    <img src={require("../Styles/css-content/lgh2.jpeg")} />
                    <section className="about-property">
                        <h2>Apartment 109</h2>
                        <h5>Floor:</h5>
                        <ul className="about-property-row">
                            <li>789 XC</li>
                            <li>3 rooms</li>
                            <li>89 m2</li>
                        </ul>
                    </section>
                </li>
            </ul>

            <ul className="user-properties-listed">
                <li className="property-list">
                    <img src={require("../Styles/css-content/lgh2.jpeg")} />
                    <section className="about-property">
                        <h2>Apartment 109</h2>
                        <h5>Floor: </h5>
                        <section className="about-property-list">
                            <p>789 XC</p>
                            <p>3 rooms</p>
                            <p>89 Xm2</p>
                        </section>
                    </section>
                </li>
            </ul>
        </>
    )
}

export default PropertyList;
