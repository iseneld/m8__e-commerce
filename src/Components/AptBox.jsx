import Poster from "./Poster";
import PosterGrid from "./PosterGrid";

function AptBox() {
  return (
    <div className="AptBox-frame">
        <h1 className="apt-title">Your property</h1>
        <img src='./images/apt.png' alt="The apartment" />
        <PosterGrid />   
    </div>
  )
}

export default AptBox;

