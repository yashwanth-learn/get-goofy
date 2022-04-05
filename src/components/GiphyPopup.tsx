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
          <div>
            <h2>{giphy.title}</h2>
          </div>
          <div className="giphy-img-div">
            <img
              className="giphy-img"
              src={giphy?.images?.fixed_height?.url}
              alt={giphy.title}
            />
          </div>
          <div className="giphy-details-div">
            <span>
              <p>
                <a href={giphy.bitly_gif_url}>bitly gif url</a>
              </p>
            </span>
            <span>
              <p>
                <a href={giphy.bitly_url}>bitly url</a>
              </p>
            </span>
            <span>
              <p>
                <a href={giphy.import_datetime}>imported time</a>
              </p>
            </span>
            <span>
              <p>
                <a href={giphy.type}>type</a>
              </p>
            </span>
            <span>
              <p>
                <a href={giphy.url}>url</a>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
