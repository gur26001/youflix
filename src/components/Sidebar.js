import { ArrowDownward, ArrowDropDown, Book, Feedback, Gamepad, Help, History, Home, OndemandVideo, ScreenLockLandscape, Settings, Sports, Subscriptions, Theaters, ThumbUp, VideoLibrary, ViewStream, WatchLater, Whatshot } from '@mui/icons-material';
import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';


function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow selected Icon={Home} title={"Home"}/>
            <SidebarRow Icon={Whatshot} title={"Trending"}/>
            <SidebarRow Icon={Subscriptions} title={"Subcription"}/>
            <hr/>
            
            <SidebarRow Icon={VideoLibrary} title={"Library"}/>
            <SidebarRow Icon={History} title={"History"}/>
            <SidebarRow Icon={OndemandVideo} title={"Your videos"}/>
            <SidebarRow Icon={WatchLater} title={"Watch later"}/>
            <SidebarRow Icon={ThumbUp} title={"Liked Videos"}/>
            <SidebarRow Icon={ArrowDropDown} title={"Show More"}/>
            <hr/>
            {/* <SidebarRow Icon={ViewStream} title={"Live"}/>
            <SidebarRow Icon={Theaters} title={"Movies"}/>
            <SidebarRow Icon={Gamepad} title={"Gaming"}/>
            <SidebarRow Icon={Book} title={"Learning"}/>
            <SidebarRow Icon={Sports} title={"Sports"}/>
            <hr/> */}
            <SidebarRow Icon={Settings} title={"Settings"}/>
            <SidebarRow Icon={Help} title={"Help"}/>
            <SidebarRow Icon={Feedback} title={"Feedback or Suggestion"}/>
        </div>
    )
}

export default Sidebar
