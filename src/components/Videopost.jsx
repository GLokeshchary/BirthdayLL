import React from "react";
import "./Videopost.css";
const Videopost = (vname) => {
  return (
    <div className="video-container">
      <div className="video-header">LEELA X DANCE</div>
      <div className="video1">
        <video height="500" controls>
          <source src={`src/assets/videos/v1.mp4`} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Videopost;
