import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './VideoPage.css';

const VideoCardContainer = ({ searchQuery }) => {
  const [videoData, setVideoData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {

        const api_key = "AIzaSyDBmL5qbTIZhijDBSrsQKSlhJmGvfUN_JI";
        const video_http = "https://www.googleapis.com/youtube/v3/videos?";
        const channel_http = "https://www.googleapis.com/youtube/v3/channels?";

        let searchVideos = [];
        if (searchQuery) {
          const search_http = "https://www.googleapis.com/youtube/v3/search?";
          const searchResponse = await fetch(search_http + new URLSearchParams({
            key: api_key,
            part: 'snippet',
            q: searchQuery,
            maxResults: 50,
            type: 'video'
          }));
          const searchData = await searchResponse.json();
          searchVideos = searchData.items.map((item) => item.id.videoId);
        }

        const defaultResponse = await fetch(video_http + new URLSearchParams({
          key: api_key,
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 50,
          regionCode: 'US'
        }));
        const defaultData = await defaultResponse.json();

        const items = searchVideos.length > 0 ? searchVideos : defaultData.items.map((item) => item.id);

        const updatedItems = await Promise.all(items.map(async (videoId) => {
          const videoResponse = await fetch(video_http + new URLSearchParams({
            key: api_key,
            part: 'snippet',
            id: videoId
          }));
          const videoData = await videoResponse.json();

          const channelResponse = await fetch(channel_http + new URLSearchParams({
            key: api_key,
            part: 'snippet',
            id: videoData.items[0].snippet.channelId
          }));
          const channelData = await channelResponse.json();

          const item = {
            id: videoData.items[0].id,
            snippet: videoData.items[0].snippet,
            channelThumbnail: channelData.items[0].snippet.thumbnails.default.url
          };
          return item;
        }));

        setVideoData(updatedItems);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="video-container">
      {videoData.map((data) => (
        <div className="video" key={data.id} onClick={() => handleVideoClick(data.id)}>
          <img src={data.snippet.thumbnails.high.url} className="thumbnail" alt="" />
          <div className="content">
            <img src={data.channelThumbnail} className="channel-icon" alt="" />
            <div className="info">
              <h4 className="title">{data.snippet.title}</h4>
              <p className="channel-name">{data.snippet.channelTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    const searchInput = document.querySelector('.search-bar');
    setSearchQuery(searchInput.value);
  };

  return (
    <div>
      <div className="search-box">
        <input type="text" className="search-bar" placeholder="search" />
        <button className="search-btn" onClick={handleSearchClick}>
          <img src="img/search.PNG" alt="" />
        </button>
      </div>
      <VideoCardContainer searchQuery={searchQuery} />
    </div>
  );
}