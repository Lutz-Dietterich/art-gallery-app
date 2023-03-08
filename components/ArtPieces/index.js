import React from "react";
import ArtPiecePreview from "../ArtPiecePreview";
import useSWR from "swr";
import styled from "styled-components";

export default function ArtPieces({ pieces }) {
  if (!pieces) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>Pieces of Art</h1>
      <StyledPiecesList>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            />
          </li>
        ))}
      </StyledPiecesList>
    </>
  );
}

const StyledPiecesList = styled.ul`
  margin-bottom: 100px;
`;
