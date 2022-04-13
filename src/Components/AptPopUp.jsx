import "../Styles/"
import Window from "Window.jsx";

const PopupApt = () => {
    <div>
        <Popup trigger={<Window> Click to open popup </Window>}
            position="right center">
            <div>GeeksforGeeks</div>
            <button>Click here</button>
        </Popup>
    </div>
};

export default PopupApt

