import React from "react";
import "./Videopost.css";
const Videopostt = (vname) => {
  return (
    <div className="video-container">
      <div className="video-header">LEELA X CRICKET</div>
      <div className="video1">
        <video height="500" controls>
          <source src={`public/assets/v3.mp4`} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Videopostt;
