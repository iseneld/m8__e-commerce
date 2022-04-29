import Poster from "./Poster";
import { useState, useContext } from 'react';
import { PosterContext } from "../Pages/Apartment";

function PosterGrid() {

  const [selectedPosterContainer, setSelectedPosterContainer] = useState();
  const { selectedPoster } = useContext(PosterContext);




  return (
    <div className="poster-grid">
      <Poster changeContainer={() => setSelectedPosterContainer(1)} sentPoster={selectedPosterContainer === 1 ? selectedPoster : ""} posterId={1} />
      <Poster changeContainer={() => setSelectedPosterContainer(2)} sentPoster={selectedPosterContainer === 2 ? selectedPoster : ""} posterId={2} />
      <Poster changeContainer={() => setSelectedPosterContainer(3)} sentPoster={selectedPosterContainer === 3 ? selectedPoster : ""} posterId={3} />
    </div>
  )
}

export default PosterGrid;