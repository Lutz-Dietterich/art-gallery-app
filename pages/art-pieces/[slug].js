import React from "react";
import { useRouter } from "next/router";
import ArtPiecesDetails from "../../components/ArtPiecesDetails";

import { DataContext } from "../../pages/_app";
import { useContext } from "react";

export default function ArtPiecesDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const { pieces } = useContext(DataContext);
  if (!pieces) {
    return <p>Loading...</p>;
  }
  const piece = pieces.find((piece) => piece.slug === slug);
  return (
    <ArtPiecesDetails
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
    />
  );
}
