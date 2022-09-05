
import React,{useState} from 'react';
import Menu from '@mui/icons-material/Menu';
import { Apps, Notifications, Search, VideoCall } from '@mui/icons-material';
import logo from '../media/logo.png';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import avatar from '../media/avatar.png';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
    const [inputSearch,setInputSearch]= useState("");
    return (
        <div className='header'>
            <div className='header_left'>
                <Menu className='menubar'/>
                <Link to={'/'}>  
                    <img className='header_logo' src={logo}  alt="logo"/>
                </Link>
            </div>
            
            <div className='header_input'>
                <input onChange={e=>setInputSearch(e.target.value)} value={inputSearch} className='search_i' type="text"/>
                <Link to={`search/${inputSearch}`}>
                    <Search className='search_btn'/>
                </Link>
                
            </div>

             <div className='header_icons'>
                <Apps className='header_icon'/>
                <VideoCall className='header_icon'/>
                <Notifications className='header_icon' />
                <AccountCircleIcon alt="incredibleHulk" src={avatar}/>
             </div>
            
        </div>
    )
}

export default Header
