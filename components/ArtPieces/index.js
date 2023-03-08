import React from "react";
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  if (!pieces) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>Pieces of Art</h1>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
