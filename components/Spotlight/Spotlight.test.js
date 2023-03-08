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
  const spotlightHeadline = screen.getByText("Piece of the Day");
  expect(spotlightHeadline).toBeInTheDocument();

  // Check if the image is rendered
  expect(screen.getByAltText("Mona Lisa")).toBeInTheDocument();

  // Check if the title is rendered
  expect(
    screen.getByText("Mona Lisa by Leonardo da Vinci")
  ).toBeInTheDocument();
});

// import { render, screen } from "@testing-library/react";
// import Spotlight from "../Spotlight";

// test("renders an random art piece preview with title", () => {
//   render(<Spotlight />);

//   expect(screen.getByText("Piece of the Day")).toBeInTheDocument();
//   expect(screen.queryByText("Loading...")).toBeNull();

//   const image = screen.getByAltText("Art piece preview");
//   expect(image).toBeInTheDocument();
//   expect(image.src).toContain("https://via.placeholder.com/");

//   expect(screen.getByText(/Title/i)).toBeInTheDocument();
//   expect(screen.getByText(/Artist/i)).toBeInTheDocument();
// });
