import AptBox from "./AptBox";
import AptInfo from "./AptInfo";

function AptDisplay() {
    return (
            <div className="apt-display apt-display--your-property">
                <AptBox />
                <AptInfo />
            </div>
    )
}

export default AptDisplay;
