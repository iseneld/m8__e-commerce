
const AptDisplay = () => {
    return (
        <>
            <div className="apt-display">
                <h1 className="apt-title">Apartment 109</h1>
                <h3 className="sale-status">This property is for sale!</h3>
                <img src='./images/apt.png' alt="The apartment"/>
                <section className="about-apt">
                    <h4>ID:</h4>
                    <h4>Owner:</h4>
                    <h4>Price:</h4>
                </section>
                <button className="buy-button">BUY</button>

            </div>

        </>
    )
}

export default AptDisplay;
