import Image from "next/image";

export default function ArtPiecesDetails({
  image,
  title,
  artist,
  year,
  genre,
}) {
  return (
    <main>
      <h1>{title}</h1>
      <Image src={image} alt={title} />
      <h2>{artist}</h2>
      <p>{year}</p>
      <p>{genre}</p>
    </main>
  );
}
