import "./RecommendedVideos.css";
// import React, { useState } from 'react'
import Video from "./Videocard";
import Filter from "./Filter";
import { useEffect, useState } from "react";

function RecommendedVideos() {
  const API_KEY = "AIzaSyCI6IGjy34_JEsRN2CozE3qlpMBuhxKm-o";
  const VIDEOS_HTTP = "https://www.googleapis.com/youtube/v3/videos?";
  const CHANNEL_HTTP = "https://www.googleapis.com/youtube/v3/channels?";

  const [vdata, setVdata] = useState([]);
  
  useEffect(() => {
    fetch(
      VIDEOS_HTTP +
        new URLSearchParams({
          key: API_KEY,
          part: "snippet",
          chart: "mostPopular",
          maxResult: 1,
          regionCode: "IN",
        })
    )
      .then((res) => res.json())
      .then((data) => {
        var d = data.items;

        setVdata(d);
      });
  }, []);

  console.log(vdata);

  return (
    <div className="recommended">
      <Filter />
      <div className="recommended_videos">
        {vdata.map((data) => {
           
        const d= data;
          return (
            <Video dt={d}  />
          );
        })}
      </div>
    </div>
  );
}

export default RecommendedVideos;
