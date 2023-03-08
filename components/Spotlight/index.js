import ArtPiecePreview from "../ArtPiecePreview";
import useSWR from "swr";

export default function Spotlight() {
  const { data: pieces } = useSWR("https://example-apis.vercel.app/api/art");

  if (!pieces) {
    return <p>Loading...</p>;
  }

  function pickRandokArtPiece() {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    return pieces[randomIndex];
  }

  const randomItem = pickRandokArtPiece();
  console.log(randomItem);

  return (
    <>
      <h1>Piece of the Day</h1>
      <ArtPiecePreview
        image={randomItem.imageSource}
        title={randomItem.name}
        artist={randomItem.artist}
      />
    </>
  );
}
