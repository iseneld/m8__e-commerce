import Poster from "./Poster";
import { useState } from 'react';


function PosterGrid() {

  const [selectedPosterContainer, setSelectedPosterContainer] = useState();



  return (
    <div className="poster-grid">
      <Poster posterId={1} setId={() => setSelectedPosterContainer(1)} selectedPosterContainer={selectedPosterContainer}/>
      <Poster posterId={2} setId={() => setSelectedPosterContainer(2)} selectedPosterContainer={selectedPosterContainer}/>
      <Poster posterId={3} setId={() => setSelectedPosterContainer(3)} selectedPosterContainer={selectedPosterContainer}/>
    </div>
  )
}

export default PosterGrid;