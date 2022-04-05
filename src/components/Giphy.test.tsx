import React from "react";
import { render, screen } from "@testing-library/react";
import { giphy, imageType } from "../types/giphy";
import Giphy from "./Giphy";
import GiphyPopup from "./GiphyPopup";

jest.mock("./GiphyPopup");
(GiphyPopup as jest.Mock).mockImplementation(() => {
  return <div>this is a popup</div>;
});

const mockImage: imageType = {
  fixed_height: {
    url: ""
  }
};

const mockGiphy: giphy = {
  id: "",
  title: "",
  images: mockImage,
  bitly_gif_url: "",
  bitly_url: "",
  import_datetime: "",
  type: "",
  url: "url"
};

const renderComponent = () => {
  render(<Giphy giphy={mockGiphy} />);
};
describe("test Giphy", () => {
  it("should render image", () => {
    renderComponent();
    const id = `img-${mockGiphy.url}`;
    const imgElement = screen.getByTestId(id);
    expect(imgElement).toBeInTheDocument();
  });
});
