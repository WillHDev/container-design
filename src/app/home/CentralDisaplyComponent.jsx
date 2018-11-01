import React from "react";
import shortid from "shortid";

function CentralDisplayComponent({
  artworkData,
  showAudenSpinner,
  fetchArtwork
}) {
  // seeMoreArt() {

  // }
  if (showAudenSpinner) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {artworkData.map(piece => {
        return (
          <li key={shortid.generate()}>
            <img src={piece.image} alt={piece.label} />
            <a href={`https://localhost:3000/${piece.url}`}>{piece.title}</a>
          </li>
        );
      })}
      <button onClick={() => fetchArtWork("winterCollection")} />
    </ul>
  );
}
export default CentralDisplayComponent;
//<button onClick={() => fetchArtwork}></button>
//<button onClick={() => this.seeMoreArt()}></button>
