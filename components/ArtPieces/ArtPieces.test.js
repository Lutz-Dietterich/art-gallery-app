import { render, screen } from "@testing-library/react";
import ArtPieces from "../ArtPieces";

test("renders a list of art pieces", () => {
  const pieces = [
    {
      slug: "mona-lisa",
      name: "Mona Lisa",
      artist: "Leonardo da Vinci",
      imageSource: "https://example.com/mona-lisa.jpg",
    },
    {
      slug: "starry-night",
      name: "The Starry Night",
      artist: "Vincent van Gogh",
      imageSource: "https://example.com/starry-night.jpg",
    },
  ];

  render(<ArtPieces pieces={pieces} />);

  // Check if the title is rendered
  expect(screen.getByText("Pieces of Art")).toBeInTheDocument();

  // Check if a list item is rendered for each piece
  const artPieceElements = screen.getAllByRole("listitem");
  expect(artPieceElements).toHaveLength(pieces.length);
});
