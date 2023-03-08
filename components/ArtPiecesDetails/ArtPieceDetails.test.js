import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "../ArtPiecesDetails";

test("renders ArtPieceDetails", () => {
  render(
    <ArtPieceDetails
      image="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
      title="Orange Red and Green Abstract Painting"
      artist="Steve Johnson"
      year="2018"
      genre="Abstract Painting"
    />
  );

  expect(
    screen.getByText("Orange Red and Green Abstract Painting")
  ).toBeInTheDocument();
  expect(screen.getByText("Steve Johnson")).toBeInTheDocument();
  expect(screen.getByText("2018")).toBeInTheDocument();
  expect(screen.getByText("Abstract Painting")).toBeInTheDocument();
  expect(
    screen.getByAltText("Orange Red and Green Abstract Painting")
  ).toBeInTheDocument();
});
