import Popup from "reactjs-popup";

const AptPopUp = () => {
    <div>
        <Popup trigger={<button> Click to open popup </button>}
            position="right center">
            <div>GeeksforGeeks</div>
            <button>Click here</button>
        </Popup>
    </div>
};

export default AptPopUp

