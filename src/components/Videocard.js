import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import './Videocard.css'

// title,timestamp,channelName,videoimage,views,channelImage

function Videocard(props) {
    console.log(props);
    return (
        <a href={`https://www.youtube.com/watch?v=${props.dt.id}`}>
        <div key={props.dt.id} className='videoCard'>
            <img className='videoCard_thumbnail' src={props.dt.snippet.thumbnails.high.url}  alt=""/>
            <div className='videoCard_info'>
                <AccountCircleIcon className='videoCard_AccountCircleIcon' src={""} alt="" />
                <div className='videoCard_txt'>
                    <h5>{props.dt.snippet.localized.title}</h5>
                    <p>{props.dt.snippet.channelTitle}</p>
                    <p>
                        {"8M"} Views <b>•</b> 2 days ago
                    </p>
                </div>
            </div>
        </div>
        </a>
    )
}

export default Videocard
