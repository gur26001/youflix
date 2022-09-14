import React from "react";
import "./Searchpage.css";
import { Tune } from "@mui/icons-material";
import ChannelRow from "../Components/ChannelRow";
import VideoRow from "../Components/VideoRow";

function Searchpage(props) {
console.log("props:",props);
const dt=props.search;
  return (
    <div className="searchPage">
      
      <div className="searchPage_filter">
        <Tune className="searchPage_filter_icon" />
        <h2>Filter</h2>
      </div>
      <hr />
      <div>
        <ChannelRow
            image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
            channelname="Clever Programmer"
            verified
            subs="1.05M"
            noOfVideos={642}
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
        />
      <hr />
        {
            dt.map((item)=>{
                return <div key={item.id.videoId}>
                    <VideoRow
                        views={"26K"}
                        verified
                        desciption={item.snippet.desciption}

                        timestamp={item.snippet.publishTime}
                        channel={item.snippet.channelTitle}
                        title={item.snippet.title}
                        image={
                            item.snippet.thumbnails.high.url
                        }
                    />
                </div>
            })
        }
        
      </div>
      
      

      
    </div>
  );
}

export default Searchpage;
// https://i.ytimg.com/vi/4F2m91eKmts/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-xXKxkdEcnQSRc2t89jCM32_R5g
