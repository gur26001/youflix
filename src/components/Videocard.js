import { Avatar } from '@material-ui/core'
import React from 'react'
import './Videocard.css'

function Videocard({title,timestamp,channelName,videoimage,views,channelImage}) {
    return (
        <div className='videoCard'>
            <img className='videoCard_thumbnail' src={videoimage} alt=""/>
            <div className='videoCard_info'>
                <Avatar className='videoCard_avatar' src={channelImage} alt={channelName} />
                <div className='videoCard_txt'>
                    <h5>{title}</h5>
                    <p>{channelName}</p>
                    <p>
                        {views} Views <b>•</b> {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Videocard
