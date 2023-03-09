import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import { useContext } from "react";
import { DataContext } from "../../pages/_app";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
}) {
  const { onToggleFavorite } = useContext(DataContext);
  return (
    <article>
      <Image src={image} alt={title} width={100} height={100} />
      <h2>
        {title} by {artist}
      </h2>
      <Link href={`/art-pieces/${slug}`}>View Details</Link>
      <FavoriteButton
        slug={slug}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </article>
  );
}
