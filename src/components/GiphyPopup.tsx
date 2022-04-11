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
          <div data-testid = "giphy-popup-title">
            <h2>{giphy.title}</h2>
          </div>
          <div className="giphy-img-div">
            <img data-testid = "giphy-popup-img"
              className="giphy-img"
              src={giphy?.images?.fixed_height?.url}
              alt={giphy.title}
            />
          </div>
          <div className="giphy-details-div">
            <table className="giphy-details-table">
              <thead>
                <tr>
                  <th>bitly gif url</th>
                  <th>bitly url</th>
                  <th>imported time</th>
                  <th>type</th>
                  <th>giphy url</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href={giphy.bitly_gif_url} data-testid = "giphy-popup-url-1">bitly gif</a></td>
                  <td><a href={giphy.bitly_url} data-testid = "giphy-popup-url-2">bitly</a></td>
                  <td>{giphy.import_datetime}</td>
                  <td>{giphy.type}</td>
                  <td><a href={giphy.url} data-testid = "giphy-popup-url-3">url</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
