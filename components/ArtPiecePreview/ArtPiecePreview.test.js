import { render, screen } from "@testing-library/react";
import ArtPiecePreview from ".";

test("renders an art piece preview", () => {
  render(
    <ArtPiecePreview
      image="https://example.com/mona-lisa.jpg"
      title="Mona Lisa"
      artist="Leonardo da Vinci"
    />
  );

  // Check if the image is rendered
  expect(screen.getByAltText("Mona Lisa")).toBeInTheDocument();

  // Check if the title is rendered
  expect(
    screen.getByText("Mona Lisa by Leonardo da Vinci")
  ).toBeInTheDocument();
});
