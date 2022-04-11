import { render, screen } from "@testing-library/react";
import { giphy, imageType } from "../types/giphy";
import GiphyPopup from "./GiphyPopup";

const mockImage: imageType = {
  fixed_height: {
    url: ""
  }
};

const mockGiphy: giphy = {
  id: "123",
  title: "giphy-giphy",
  images: mockImage,
  bitly_gif_url: "bitly_gif_url",
  bitly_url: "bitly_url",
  import_datetime: "12/18/2021",
  type: "funny",
  url: "url"
};

const renderComponent = () => {
  render(<GiphyPopup giphy={mockGiphy} handleClose={() => ""} />);
};
describe("test giphy popup", () => {
  it("should render the popup", () => {
    renderComponent();
    const img = screen.getByTestId("giphy-popup-img");
    const title = screen.getByTestId("giphy-popup-title");
    const gifUrl = screen.getByText("bitly gif url");
    const bitlyUrl = screen.getByText("bitly url");
    const importDate = screen.getByText("imported time");
    const type = screen.getByText("type");
    const url = screen.getByText("giphy url");

    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(gifUrl).toBeInTheDocument();
    expect(bitlyUrl).toBeInTheDocument();
    expect(importDate).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(url).toBeInTheDocument();
  });
});
