import React from "react";
import { giphy } from "../types/giphy";
import "./GiphyPopup.css";

export default function GiphyPopup(props: { giphy: giphy; handleClose: any }) {
  const { giphy, handleClose } = props;
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <div style={{textAlign: "center"}}>
          <div data-testId = "giphy-popup-title">
            <h2>{giphy.title}</h2>
          </div>
          <div className="giphy-img-div">
            <img data-testId = "giphy-popup-img"
              className="giphy-img"
              src={giphy?.images?.fixed_height?.url}
              alt={giphy.title}
            />
          </div>
          <div className="giphy-details-div">
            <span >
              <p>
                <a href={giphy.bitly_gif_url} data-testId = "giphy-popup-url-1">bitly gif url</a>
              </p>
            </span>
            <span>
              <p>
                <a href={giphy.bitly_url} data-testId = "giphy-popup-url-2">bitly url</a>
              </p>
            </span>
            <span>
              <p>
                <a href={giphy.import_datetime} data-testId = "giphy-popup-time">imported time</a>
              </p>
            </span>
            <span>
              <p>
                <a href={giphy.type} data-testId = "giphy-popup-type">type</a>
              </p>
            </span>
            <span>
              <p>
                <a href={giphy.url} data-testId = "giphy-popup-url-3">url</a>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
