import React from "react";
import { useRouter } from "next/router";
import ArtPiecesDetails from "../../components/ArtPiecesDetails";

import useSWR from "swr";

export default function ArtPiecesDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const { data: pieces } = useSWR("https://example-apis.vercel.app/api/art");
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
