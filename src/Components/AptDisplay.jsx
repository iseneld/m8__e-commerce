import AptBox from "./AptBox";
import AptInfo from "./AptInfo";

function AptDisplay() {
    return (
        <div className="article-container">
            <div className="apt-display">
                <AptBox />
                <AptInfo />
                <button className="sell-btn">SELL</button>

            </div>

        </div>
    )
}

export default AptDisplay;
