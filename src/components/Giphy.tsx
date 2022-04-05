import React, { useState } from "react";
import { giphy } from "../types/giphy";
import GiphyPopup from "./GiphyPopup";

export default function Giphy(props: { giphy: giphy }) {
  const { giphy } = props;
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const handleClickPopup = () => {
    setOpenPopup(true);
  };
  return (
    <>
      <img
        alt=""
        height={200}
        width={200}
        src={giphy?.images?.fixed_height?.url}
        onClick={handleClickPopup}
        data-testId={`img-${giphy.url}`}
      />
      {openPopup && (
        <GiphyPopup giphy={giphy} handleClose={()=>setOpenPopup(false)} />
      )}
    </>
  );
}
