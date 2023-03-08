import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <article>
      <Image src={image} alt={title} width={100} height={100} />
      <h2>
        {title} by {artist}
      </h2>
    </article>
  );
}
