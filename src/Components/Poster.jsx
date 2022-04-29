

function Poster({ changeContainer, sentPoster, posterId }) {

  const poster = sentPoster;
  let localPoster = localStorage.getItem("poster" + posterId);
  console.log(localPoster)

  if (localPoster === null) localPoster = "";

  if (poster !== "") {
    localStorage.setItem("poster" + posterId, poster)
  }

  //
  //poster === "" ? null : localStorage;

  return (
    <div className="poster-frame" onClick={changeContainer}>
      <img src={poster === "" ? require(`../Styles/css-content/posters/${localStorage.getItem("poster" + posterId)}`) :
        require(`../Styles/css-content/posters/${poster}`)} /></div>
  )
}

export default Poster