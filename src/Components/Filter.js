import React from 'react';
import "./Filter.css";

function Filter() {
  return (
    <div className="filter d__flex align__items__center">
      <div className="single__filter">
        <span className="filter__items pointer active">All</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">Mixes</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">Music</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">Javascript</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">Coures</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">Java</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">SQL</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">Computers</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">Mixes</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">Motivation</span>
      </div>
      <div className="single__filter">
        <svg
          viewBox="0 0 16 16"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="style-scope yt-icon pointer"
          style={{"width":"20px"}}
        >
          <g mirror-in-rtl="" className="style-scope yt-icon">
            <path
              d="M4.97,12.65L9.62,8L4.97,3.35l0.71-0.71L11.03,8l-5.35,5.35L4.97,12.65z"
              className="style-scope yt-icon"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  )
};

export default Filter;