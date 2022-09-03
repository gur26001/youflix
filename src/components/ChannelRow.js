import { Avatar } from '@material-ui/core'
import { CheckCircle } from '@material-ui/icons'



import React from 'react'
import './ChannelRow.css'

function ChannelRow({image,channelname,verified,subs,noOfVideos,description}) {
    return (
        <div className='channelRow'>
            <Avatar className='channelRow_logo' src={image}/>
            <div className='channelRow_txt'>
                 <h2 className='channelRow_channelname'>{channelname} {verified && <CheckCircle className='verifiedB'/>}</h2>
                 <p>
                     {subs} subscribers • {noOfVideos} videos
                 </p>
                 <p>{description}</p>
            </div>
           
        </div>
    )
}

export default ChannelRow
