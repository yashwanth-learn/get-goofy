import React, { useEffect, useState } from "react";
import fetchGiphy from "../api/fetchGiphy";
import { giphy } from "../types/giphy";
import Giphy from "./Giphy";

export default function Home() {
  const [offSet, setOffSet] = useState<number>(0);
  const [giphys, setGiphys] = useState<giphy[]>([]);
  const [getMoreGiphys, setGetMoreGiphys] = useState<boolean>(true);
  const handleGetGiphy = async () => {
    const data = await fetchGiphy(offSet);
    const updatedGiphys = giphys.concat(data.data);
    setGiphys(updatedGiphys);
    setOffSet(offSet + 50);
  };
  const handleScroll = () => {
    if (!(window.innerHeight + window.scrollY <= document.body.scrollHeight)) {
      setGetMoreGiphys(true);
    }
  };
  useEffect(() => {
    if (getMoreGiphys) {
      handleGetGiphy();
      window.addEventListener("scroll", handleScroll, true);
      setGetMoreGiphys(false);
    }
  }, [getMoreGiphys]);
  return (
    <>
      <div
        style={{ textAlign: "center", marginTop: "10px", marginBottom: "20px" }}
      >
        <h2>Welcome to goofy giphy!</h2>
      </div>
      <div style={{ marginRight: "15%", marginLeft: "15%" }}>
        {giphys?.map((giphy: giphy, index: number) => {
          return <Giphy key={index} giphy={giphy} />;
        })}
      </div>
    </>
  );
}
