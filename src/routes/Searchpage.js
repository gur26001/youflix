import React from 'react'
import './Searchpage.css'
import {Tune } from '@mui/icons-material';
import ChannelRow from '../Components/ChannelRow';
import VideoRow from '../Components/VideoRow';

function Searchpage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_filter'>
                <Tune className='searchPage_filter_icon'/>
                <h2>Filter</h2>
            </div>
            <hr/>
            <ChannelRow 
                image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
                channelname="Clever Programmer"
                verified
                subs="1.05M"
                noOfVideos={642}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ...
"
            />
            <hr/>
            <VideoRow 
            views={"26K"} 
             verified
             desciption = {"In today's build, you're gonna learn about How to use React JS to build the Frontend of a Web Application How to use In today's video, I will be talking about, The opportunity that's out there for Frontend Developers & Blockchain Dev..."}
             timestamp={"2 days ago"}
             channel ={"Clever Programmer"}
             title ={"🔴 Build Modern Cryptopunk Clone with React.js & Web 3.0"}
             image ={"https://i.ytimg.com/vi/hhZtiytNaBQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCp-xKzj-wwd6gHeuwCXrGJKzAtTA"}
             />

                         <VideoRow 
            views={"26K"} 
             verified
             desciption = {"In today's build, you're gonna learn about How to use React JS to build the Frontend of a Web Application How to use In today's video, I will be talking about, The opportunity that's out there for Frontend Developers & Blockchain Dev..."}
             timestamp={"2 days ago"}
             channel ={"Clever Programmer"}
             title ={"🔴 Build Modern Cryptopunk Clone with React.js & Web 3.0"}
             image ={" https://i.ytimg.com/vi/4F2m91eKmts/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-xXKxkdEcnQSRc2t89jCM32_R5g"}
             />


            <VideoRow 
            views={"26K"} 
             verified
             desciption = {"In today's build, you're gonna learn about How to use React JS to build the Frontend of a Web Application How to use In today's video, I will be talking about, The opportunity that's out there for Frontend Developers & Blockchain Dev..."}
             timestamp={"2 days ago"}
             channel ={"Clever Programmer"}
             title ={"🔴 Build Modern Cryptopunk Clone with React.js & Web 3.0"}
             image ={"https://i.ytimg.com/vi/hhZtiytNaBQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCp-xKzj-wwd6gHeuwCXrGJKzAtTA"}
             />
                         <VideoRow 
            views={"26K"} 
             verified
             desciption = {"In today's build, you're gonna learn about How to use React JS to build the Frontend of a Web Application How to use In today's video, I will be talking about, The opportunity that's out there for Frontend Developers & Blockchain Dev..."}
             timestamp={"2 days ago"}
             channel ={"Clever Programmer"}
             title ={"🔴 Build Modern Cryptopunk Clone with React.js & Web 3.0"}
             image ={" https://i.ytimg.com/vi/4F2m91eKmts/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-xXKxkdEcnQSRc2t89jCM32_R5g"}
             />
                         <VideoRow 
            views={"26K"} 
             verified
             desciption = {"In today's build, you're gonna learn about How to use React JS to build the Frontend of a Web Application How to use In today's video, I will be talking about, The opportunity that's out there for Frontend Developers & Blockchain Dev..."}
             timestamp={"2 days ago"}
             channel ={"Clever Programmer"}
             title ={"🔴 Build Modern Cryptopunk Clone with React.js & Web 3.0"}
             image ={"https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-RHIIrX9WSf7IdTa2J4j4wSLtwQ"}
             />

                         <VideoRow 
            views={"26K"} 
             verified
             desciption = {"In today's build, you're gonna learn about How to use React JS to build the Frontend of a Web Application How to use In today's video, I will be talking about, The opportunity that's out there for Frontend Developers & Blockchain Dev..."}
             timestamp={"2 days ago"}
             channel ={"Clever Programmer"}
             title ={"🔴 Build Modern Cryptopunk Clone with React.js & Web 3.0"}
             image ={"https://i.ytimg.com/vi/hhZtiytNaBQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCp-xKzj-wwd6gHeuwCXrGJKzAtTA"}
             />
                         <VideoRow 
            views={"26K"} 
             verified
             desciption = {"In today's build, you're gonna learn about How to use React JS to build the Frontend of a Web Application How to use In today's video, I will be talking about, The opportunity that's out there for Frontend Developers & Blockchain Dev..."}
             timestamp={"2 days ago"}
             channel ={"Clever Programmer"}
             title ={"🔴 Build Modern Cryptopunk Clone with React.js & Web 3.0"}
             image ={"https://i.ytimg.com/vi/hhZtiytNaBQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCp-xKzj-wwd6gHeuwCXrGJKzAtTA"}
             />

        </div>
    )
}

export default Searchpage
// https://i.ytimg.com/vi/4F2m91eKmts/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-xXKxkdEcnQSRc2t89jCM32_R5g