import React, { useState } from "react";
import Menu from "@mui/icons-material/Menu";
import { Apps, Notifications, Search, VideoCall } from "@mui/icons-material";
import logo from "../media/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import avatar from "../media/avatar.png";
import "./Header.css";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import Searchpage from "../routes/Searchpage";
// import env from 'react-dotenv';


function Header() {
  const [inputSearch, setInputSearch] = useState("");
  const [searched, setSearched] = useState([]);
  
  function search(){
    axios
		.get(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inputSearch}&&key=${process.env.REACT_APP_API_KEY}`
		)
		.then((res) => {
			console.log(res.data.items);
			setSearched(res.data.items);
		})
		.catch((err) => console.log(err));

      console.log("searched - > ",searched);
  }

  return (
    <div>
      <div className="header">
        <div className="header_left">
          <Menu className="menubar" />
          <Link to={"/"}>
            <img className="header_logo" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="header_input">
          <input
            onBlur={(e) => setInputSearch(e.target.value)}
            className="search_i"
            type="text"
          />

          <Link onClick={search} to={`search/${inputSearch}`}>
            <Search className="search_btn" />
          </Link>
        </div>

        <div className="header_icons">
          <Apps className="header_icon" />
          <VideoCall className="header_icon" />
          <Notifications className="header_icon" />
          <AccountCircleIcon alt="incredibleHulk" src={avatar} />
        </div>
      </div>

      <Routes>
        <Route path="/search/:searchTerm" element={<Searchpage search={searched} />} />
      </Routes>
    </div>
  );
};

export default Header;
