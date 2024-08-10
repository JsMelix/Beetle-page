import React from 'react';
import './Trailer.css';

function Trailer() {
  return (
    <div className="trailer-container">
      <h2 className="trailer-title">Watch the Trailer</h2>
      <div className="trailer-video-wrapper">
        <iframe
          className="trailer-video"
          src="https://www.youtube.com/embed/As-vKW4ZboU"
          title="Beetlejuice Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Trailer;
