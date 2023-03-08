import { render, screen } from "@testing-library/react";
import Spotlight from "../Spotlight";

test("renders an random art piece preview", () => {
  const pieces = [
    {
      slug: "mona-lisa",
      name: "Mona Lisa",
      artist: "Leonardo da Vinci",
      imageSource: "https://example.com/mona-lisa.jpg",
    },
  ];

  render(<Spotlight pieces={pieces} />);
  // Check if the title is rendered
  expect(screen.getByText("Piece of the Day")).toBeInTheDocument();

  // Check if the image is rendered
  expect(screen.getByAltText("Mona Lisa")).toBeInTheDocument();

  // Check if the title is rendered
  expect(
    screen.getByText("Mona Lisa by Leonardo da Vinci")
  ).toBeInTheDocument();
});
