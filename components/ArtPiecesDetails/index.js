import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import { useContext } from "react";
import { DataContext } from "../../pages/_app";

export default function ArtPiecesDetails({
  image,
  title,
  artist,
  year,
  genre,
}) {
  const { onToggleFavorite } = useContext(DataContext);
  return (
    <main>
      <Link href="/art-pieces">Back to Art Pieces</Link>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={100} height={100} />
      <h2>{artist}</h2>
      <p>{year}</p>
      <p>{genre}</p>
      <FavoriteButton onToggleFavorite={onToggleFavorite} />
    </main>
  );
}
