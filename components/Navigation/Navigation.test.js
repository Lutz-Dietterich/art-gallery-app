import { render, screen } from "@testing-library/react";
import Navigation from ".";

test("Render navigation correctly with link functionality", () => {
  render(<Navigation />);
  const spotlightLink = screen.getByText("Spotlight");
  const piecesLink = screen.getByText("Pieces");

  expect(spotlightLink).toBeInTheDocument();
  expect(piecesLink).toBeInTheDocument();
});
