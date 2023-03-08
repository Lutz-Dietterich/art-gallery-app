import React from "react";
import ArtPiecePreview from "../ArtPiecePreview";
import useSWR from "swr";

export default function ArtPieces() {
  const { data: pieces } = useSWR("https://example-apis.vercel.app/api/art");

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
