import { render, screen } from "@testing-library/react";
import { giphy, imageType } from "../types/giphy";
import Giphy from "./Giphy";

const mockImage: imageType = {
  fixed_height: {
    url: "",
  },
};

const mockGiphy: giphy = {
  id: "",
  title: "",
  images: mockImage,
  bitly_gif_url: "",
  bitly_url: "",
  import_datetime: "",
  type: "",
  url: "url",
};
beforeEach(() => {
  render(<Giphy giphy={mockGiphy} />);
});
describe("test Giphy", () => {
  it("should render image", () => {
    const id = `img-${mockGiphy.url}`;
    const imgElement = screen.getByTestId(id);
    expect(imgElement).toBeInTheDocument();
  });
});
