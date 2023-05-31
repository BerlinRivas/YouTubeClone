//VideoPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './VideoPage.css'

const handleSearchClick = () => {
  const searchInput = document.querySelector('.search-bar');
  const searchLink = "https://www.youtube.com/results?search_query=";

  if (searchInput.value.length) {
    window.location.href = searchLink + searchInput.value;
  }
};

const VideoPage = () => {
  const { videoId } = useParams();

  return (
    <>
    
    <div className="search-box">
        <input type="text" className="search-bar" placeholder="search" />
        <button className="search-btn" onClick={handleSearchClick}>
          <img src="img/search.PNG" alt="" />
        </button>
      </div>
    <div className="video-page">
      <div className="video-wrapper">
       
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default VideoPage;