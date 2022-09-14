import React from 'react'
import { CheckCircle } from '@mui/icons-material'
import './VideoRow.css'

function VideoRow({id,views,verified,desciption,timestamp,channel,title,image}) {
    return ( 
        <a href={`https://www.youtube.com/watch?v=${id}`}>
        <div  className='videoRow'>
            <img className='videoRow_img' src={image}/>
            <div className='videoRow_txt'>
                <h3>{title}</h3>
                <p className='videoRow_txt_headline' >
                    {views} views • {timestamp} 
                </p>
                <p className='videoRow_txt_info'>
                    <p className='videoRow_txt_headline'> {channel} {verified && <CheckCircle className='verLogo'/>} </p>
                    
                    <p className='videoRow_txt_desc'>{desciption}</p>


                </p>
            </div>

        </div>
        </a>
    )
}

export default VideoRow
