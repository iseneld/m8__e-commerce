import AptBox from "./AptBox";
import AptInfo from "./AptInfo";

function AptDisplay() {
    return (
            <div className="apt-display apt-display--your-property">
                <AptBox />
                <AptInfo />
                <button className="sell-btn">SELL</button>

            </div>
    )
}

export default AptDisplay;
