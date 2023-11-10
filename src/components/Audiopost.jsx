import React from "react";
import "./Audiopost.css";
const Audiopost = () => {
  const songslist = ["aa1", "aa2", "aa3"];
  return (
    <div>
      <div className="audio-header"> LEELA X FAV SONGS</div>
      <div>
        {songslist.map((item) => (
          <div className="audiolist" key={item}>
            <audio controls>
              <source src={`src/assets/audios/${item}.mp3`} type="audio/mpeg" />
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Audiopost;
