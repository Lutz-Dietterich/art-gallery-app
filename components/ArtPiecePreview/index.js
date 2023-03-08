import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <article>
      <Image src={image} alt={title} width={100} height={100} />
      <h2>
        {title} by {artist}
      </h2>
      <Link href={`/art-pieces/${slug}`}>View Details</Link>
    </article>
  );
}
